import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button className="search-btn">Search Top Rated Restaurants</button>
      </div>
      <RestaurantCard />
    </div>
  );
};

export default Body;
