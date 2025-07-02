import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filteredRestraunt,setFilteredRestraunt]=useState([])

  const [searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_URL);

    const json = await data.json();
    console.log(json.data, "aaa");
    setListOfRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  };

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text"
         className="search-box"
         value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)

        }} />
        <button className="btn-search"
        onClick={()=>{

          const filtered=listOfRestraunt.filter((res)=>
           res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilteredRestraunt(filtered)
          
        }}>Search</button>
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
      <div className="res-container">
        {filteredRestraunt.map((restaurant) => (
          <Link key={restaurant.info.id}
          to={'/restaurant/'+restaurant.info.id}> 
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
           </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;
