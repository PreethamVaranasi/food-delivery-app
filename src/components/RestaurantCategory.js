import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndexFunc }) => {
  const handleClick = () => {
    setShowIndexFunc();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
