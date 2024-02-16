const RestaurantCard = ({ restaurantInfo }) => {
  return (
    <div className="p-2 m-4 w-52 hover:bg-white rounded-lg">
      <img
        className="w-52 h-44 rounded-lg"
        alt="restaurant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.info.cloudinaryImageId}`}
      />
      <h3 className="font-bold mt-2">{restaurantInfo.info.name}</h3>
      <h4 className="font-bold my-2">
        {restaurantInfo.info.avgRating} . {restaurantInfo.info.sla.slaString}
      </h4>
      <h4 className="truncate ">{restaurantInfo.info.cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
