import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;

  return (
    <div className="m-4 p-4 w-64 h-96 bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg h-48 w-52  "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );

 
};

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div className="px-2 ">
        <label className="absolute bg-blue-200 text-white px-5 m-2 rounded-lg"> Promoted</label>
        <RestaurantCard {...props}/>
      </div>

    )
  }
}

export default RestaurantCard;
