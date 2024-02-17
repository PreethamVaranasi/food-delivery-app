import { useParams } from "react-router-dom";
import useRestaurantMenuHook from "../utilities/useRestaurantMenuHook";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuCard = () => {
  const { restaurantId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const { restaurantName, restaurantMenu } =
    useRestaurantMenuHook(restaurantId);

  if (!restaurantName || !restaurantMenu) return <h1>Loading....</h1>;

  const categories = restaurantMenu.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl mb-4">{restaurantName}</h1>

      {/* Accordion */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category}
            showItem={index === showIndex && true}
            setShowIndexFunc={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuCard;
