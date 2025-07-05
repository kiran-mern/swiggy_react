import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory=({data,showItem,setShowIndex})=>{


    const handleClick=()=>{
        setShowIndex()
    }
    
    return(
        <div>
            <div className="w-1/2 bg-gray-50 shadow-lg my-4 mx-auto p-4 ">
                   
                   <div className="flex justify-between cursor-pointer"
                   onClick={handleClick}
                   >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span> ⬇️</span>
                    </div> 
            </div>
          {showItem &&  <ItemList items={data.itemCards}/> } 
        </div>
    )


}

export default RestaurantCategory;