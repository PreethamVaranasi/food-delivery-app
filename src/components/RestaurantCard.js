const RestaurantCard = ({ restaurantInfo }) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.info.cloudinaryImageId}`}
      />
      <h3>{restaurantInfo.info.name}</h3>
      <h4 className="restaurant-cuisines">
        {restaurantInfo.info.cuisines.join(",")}
      </h4>
      <h4>{restaurantInfo.info.avgRating} stars</h4>
      <h4>{restaurantInfo.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
