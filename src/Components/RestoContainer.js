import { RESTO_LOGO } from "../utils/constants";
const RestoContainer = (props) => {
  const { restoObj } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = restoObj?.info;
  const { slaString } = restoObj?.info?.sla;
  return (
    <div className="resto-container">
      <img
        className="resto-logo"
        alt="resto-logo"
        src={RESTO_LOGO + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h5>{slaString}</h5>
    </div>
  );
};

export default RestoContainer;
