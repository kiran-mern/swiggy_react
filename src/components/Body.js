import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";



const Body = () => {
    const[listOfRestraunt,setListOfRestraunt]=useState([]);

    useEffect(()=>{
      fetchData();

    },[])


    const fetchData=async()=>{

      const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    )

      const json=await data.json();
      console.log(json.data.cards,'aaa');
      setListOfRestraunt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      
    }

    
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