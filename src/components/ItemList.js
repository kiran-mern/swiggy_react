import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {

  return (
    <div className="w-1/2 mx-auto">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 bg-gray-200 text-left flex"
        >
          <div className="w-3/4">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> -₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-1/4 p-4 relative">
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            <button className="absolute bottom-2 left-1/2 transform  bg-transparent -translate-x-1/2 px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition">
              Add +
            </button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
