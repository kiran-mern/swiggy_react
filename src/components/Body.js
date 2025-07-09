import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyMenu from "../utils/useBodyMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { listOfRestraunt, filteredRestraunt, setFilteredRestraunt } =useBodyMenu();
    
  const [searchText, setSearchText] = useState("");

  const RestaurantPromotedCard=withPromotedLabel(RestaurantCard);


  const onlineStatus=useOnlineStatus()
  if(onlineStatus===false){
    return (
      <h1>Error!!!!!!!!!!!!!!</h1>
    )
  }

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center p-4 ">
        <input
          type="text"
          className="search border  border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-blue-300 rounded-md "
          onClick={() => {
            const filtered = listOfRestraunt.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestraunt(filtered);
          }}
        >
          Search
        </button>
        <div  className="px-4 py-2 m-4 bg-blue-300 rounded-md">
           <button
          className="filter-btn"
          onClick={() => {
            let filterRes = listOfRestraunt.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestraunt(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>

        </div>

      
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunt.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
          {restaurant.info.avgRating>4.5 ? 

          (<RestaurantPromotedCard resData={ restaurant}/>):

          (<RestaurantCard key={restaurant.info.id} resData={restaurant} />)}

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
