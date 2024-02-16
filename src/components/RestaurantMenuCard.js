import { useParams } from "react-router-dom";
import useRestaurantMenuHook from "../utilities/useRestaurantMenuHook";

const RestaurantMenuCard = () => {
  const { restaurantId } = useParams();

  const { restaurantName, restaurantMenu } =
    useRestaurantMenuHook(restaurantId);

  if (!restaurantName || !restaurantMenu) return <h1>Loading....</h1>;

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
