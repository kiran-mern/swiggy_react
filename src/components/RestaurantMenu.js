import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CATEGORY_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const[showIndex,setShowIndex]=useState(null)

  const resInfo=useRestaurantMenu(resId)

 

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  

  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log('12345',regularCards);
    

  // Find the first card object that contains itemCards
  const itemCardSection = regularCards.find(
    (cards) => cards?.card?.card?.itemCards
  );

  // Get the itemCards from that section
  const itemCards = itemCardSection?.card?.card?.itemCards || [];
  

  const categories=regularCards?.filter((c)=>c.card?.card?.["@type"]===CATEGORY_URL);
console.log(categories,'abcd');


  return (
    <div className=" text-center ">
            <h1  className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {categories.map((category,index)=>(
        <RestaurantCategory  key={category?.card?.card?.categoryId} 
        data={category?.card?.card}
        showItem={index===showIndex ? true:false }
        setShowIndex={()=>setShowIndex(showIndex===index ? null :index)}
        />

      ))}


    </div>
  );
};

export default RestaurantMenu;
