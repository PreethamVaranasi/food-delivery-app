import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
  const { restaurantId } = useParams();
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8430636&lng=77.656476&restaurantId=" +
        restaurantId
    );
    const jsonData = await data.json();
    setRestaurantName(jsonData?.data?.cards[0]?.card?.card?.info?.name);
    setRestaurantMenu(
      jsonData?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card.card.itemCards
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Restaurant name : {restaurantName}</h1>

      {restaurantMenu.map((menuItem) => (
        <h2 key={menuItem?.card?.info?.id}>
          {menuItem?.card?.info?.name} - Rs {menuItem?.card?.info?.price / 100}
        </h2>
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
