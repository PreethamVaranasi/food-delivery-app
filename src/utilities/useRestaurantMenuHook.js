import { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenuHook = (restaurantId) => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANT_MENU_API + restaurantId);
    const jsonData = await data.json();

    setRestaurantName(jsonData?.data?.cards[0]?.card?.card?.info?.name);
    setRestaurantMenu(
      jsonData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { restaurantName, restaurantMenu };
};

export default useRestaurantMenuHook;
