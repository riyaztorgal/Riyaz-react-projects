import RestoContainer, {
  withRestoContainerPrmoted,
} from "../Components/RestoContainer";
import restoList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContextData from "../utils/UserContexData";

const Body = () => {
  //user of useState
  const [restorentList, setRestorentList] = useState([]);
  const [filteredRestorentList, setfilteredRestorentList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestoContainerVeg = withRestoContainerPrmoted(RestoContainer);

  const { setUserLoginData } = useContext(UserContextData);

  //use of useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setRestorentList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestorentList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return (
      <h1>You are offline.! kindly check Internet Connection and Retry</h1>
    );

  if (restorentList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search-btn">
          <input
            type="text"
            className="border-2 shadow-amber-50 m-4 rounded-md "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="py-2 px-4 bg-green-100 rounded-lg hover:bg-green-200"
            onClick={() => {
              const searchedRestorent = restorentList.filter((resName) =>
                resName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredRestorentList(searchedRestorent);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-4 py-2">
          <button
            className="py-2 px-4 bg-blue-100 rounded-lg hover:bg-blue-200"
            onClick={() => {
              const filteredResto = restorentList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestorentList(filteredResto);
            }}
          >
            Top Rated Restorent
          </button>
          <button
            className="mx-4 py-2 px-4 bg-red-100 rounded-lg hover:bg--200"
            onClick={() => {
              setfilteredRestorentList(restorentList);
            }}
          >
            Reset Filter
          </button>
        </div>
        <div className="mx-2 py-2 px-2">
          <label>Live UserName Update : </label>
          <input
            className="border-2 p-2 shadow-amber-50 rounded-md "
            onChange={(e) => {
              setUserLoginData(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap p-5">
        {filteredRestorentList.map((restaurant) => (
          <Link to="/restoMenu/234" key={restaurant?.info?.id}>
            {restaurant?.info?.veg ? (
              <RestoContainerVeg restoObj={restaurant} />
            ) : (
              <RestoContainer restoObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
