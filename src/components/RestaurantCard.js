import { CND_MEDIA_URL } from "../utilities/constants";

const RestaurantCard = ({ restaurantInfo }) => {
  return (
    <div className="p-2 m-4 w-52 bg-slate-100 hover:bg-white rounded-lg">
      <img
        className="w-52 h-44 rounded-lg"
        alt="restaurant-logo"
        src={CND_MEDIA_URL + restaurantInfo.info.cloudinaryImageId}
      />
      <h3 className="font-bold mt-2">{restaurantInfo.info.name}</h3>
      <h4 className="font-bold my-2">
        {restaurantInfo.info.avgRating} . {restaurantInfo.info.sla.slaString}
      </h4>
      <h4 className="truncate ">{restaurantInfo.info.cuisines.join(",")}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
