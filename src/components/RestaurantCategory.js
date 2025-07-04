import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{

    const[isOpen,setIsOpen]=useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen)
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
          {isOpen &&  <ItemList items={data.itemCards}/> } 
        </div>
    )


}

export default RestaurantCategory;