import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  //MENU_API + resId

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // console.log(data,'hai');

    const json = await data.json();
    console.log(json?.data, "haiii");
    //  console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[3].itemCards);

    setResInfo(json.data);
  };

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
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
        <li> </li>
        <li></li>

        <li>ddd</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
