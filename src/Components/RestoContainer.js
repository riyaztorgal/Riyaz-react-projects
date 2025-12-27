import { RESTO_LOGO } from "../utils/constants";
const RestoContainer = (props) => {
  const { restoObj } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = restoObj?.info;
  const { slaString } = restoObj?.info?.sla;
  console.log(props);
  return (
    <div className="w-48 m-3 p-4 bg-gray-100 hover:bg-gray-300">
      <img
        className="w-34 h-34"
        alt="resto-logo"
        src={RESTO_LOGO + cloudinaryImageId}
      ></img>
      <h3 className="font-bold  p-3">{name}</h3>
      <h4 className="italic font-light py-2 font-extralight font-stretch-75%">
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-mono">{avgRating} Star</h4>
      <h5 className="font-medium">{slaString}</h5>
    </div>
  );
};

export const withRestoContainerPrmoted = (RestoContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-900 text-white p-0 m-4">
          Pure Veg🟢
        </label>
        <RestoContainer {...props} />
      </div>
    );
  };
};

export default RestoContainer;
