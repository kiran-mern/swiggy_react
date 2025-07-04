import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId)

 

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // const{name,cuisi}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[3].itemCards;

  // const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Find the first card object that contains itemCards
  const itemCardSection = regularCards.find(
    (cards) => cards?.card?.card?.itemCards
  );

  // Get the itemCards from that section
  const itemCards = itemCardSection?.card?.card?.itemCards || [];

  return (
    <div className=" px-96">
        <div className="px-56 pt-16 bg-gray-100">
            <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

        </div>
      
      <ul  className="">
        {itemCards.map((item) => (
          <li className="bg-gray-50 border border-solid m-4 p-4 items-center w-96 " key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
