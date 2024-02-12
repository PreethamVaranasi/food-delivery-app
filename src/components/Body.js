import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8430636&lng=77.656476&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
            const searchedRestaurants = restaurantData.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            );
            setFilteredData(searchedRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filtered = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredData(filtered);
          }}
        >
          Search Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {filteredData.map((restaurantInfo) => (
          <RestaurantCard restaurantInfo={restaurantInfo} />
        ))}
      </div>
    </div>
  );
};

export default Body;
