import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CATEGORY_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId)

 

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // const{name,cuisi}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[3].itemCards;

  // const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log('12345',regularCards);
    

  // Find the first card object that contains itemCards
  const itemCardSection = regularCards.find(
    (cards) => cards?.card?.card?.itemCards
  );

  // Get the itemCards from that section
  const itemCards = itemCardSection?.card?.card?.itemCards || [];
  // console.log(regularCards);
  

  const categories=regularCards?.filter((c)=>c.card?.card?.["@type"]===CATEGORY_URL);
console.log(categories,'abcd');


  return (
    <div className=" text-center ">
            <h1  className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {categories.map((category)=>(
        <RestaurantCategory  key={category?.card?.card?.categoryId} data={category?.card?.card}/>

      ))}



      
      {/* <ul  className="">
        {itemCards.map((item) => (
          <li className="bg-gray-50 border border-solid m-4 p-4 items-center w-96 " key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
        
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
