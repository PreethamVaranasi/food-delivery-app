import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { GET_RESTAURANTS_API } from "../utilities/constants";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANTS_API);
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

  if (!restaurantData.length > 0) return <h1>Loading....</h1>;

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
          <Link
            key={restaurantInfo?.info?.id}
            to={"/menu/" + restaurantInfo?.info?.id}
          >
            <RestaurantCard restaurantInfo={restaurantInfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
