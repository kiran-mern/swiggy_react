import { useEffect, useState } from "react";
import { HOME_URL } from "../utils/constants";


const useBodyMenu=()=>{

    const[listOfRestraunt,setListOfRestraunt]=useState([])
    const[filteredRestraunt,setFilteredRestraunt]=useState([])
    useEffect(()=>{

        fetchData()
    },[])

    const fetchData=async()=>{

        const data= await fetch(HOME_URL)
        const json= await data.json()

        const homeCards=json?.data?.cards || []
        const findCards=homeCards.find((cards)=>cards?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        const restaurant=findCards?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestraunt(restaurant)
        setFilteredRestraunt(restaurant);
        // setListOfRestraunt(json)

    }
    return {listOfRestraunt,filteredRestraunt,setFilteredRestraunt}



}
export default useBodyMenu