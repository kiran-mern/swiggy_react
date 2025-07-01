import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const[listOfRestraunt,setListOfRestraunt]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
   <button className="filter-btn"
   onClick={()=>{
    let filterRes=listOfRestraunt.filter((res)=>
       ( res.info.avgRating >4.5)
    )
    setListOfRestraunt(filterRes)

   }}
   >Top Rated Restaurant</button>     
      </div>
      <div className="res-container">
        {
            listOfRestraunt.map((restaurant)=>(
                <RestaurantCard 
                 key={restaurant.info.id}
                resData={restaurant} />

            ))
        }
      </div>
    </div>
  );
};

export default Body;