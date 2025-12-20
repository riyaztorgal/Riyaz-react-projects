import RestoContainer from "../Components/RestoContainer";
import restoList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //user of useState
  const [restorentList, setRestorentList] = useState([]);
  const [filteredRestorentList, setfilteredRestorentList] = useState([]);
  const [searchText, setsearchText] = useState("");

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

  if (restorentList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="searchBr">
        <div className="search-btn">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="top-rated-btn"
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
          className="reset-btn"
          onClick={() => {
            setfilteredRestorentList(restorentList);
          }}
        >
          Reset Filter
        </button>
      </div>

      <div className="rest0-card">
        {filteredRestorentList.map((restaurant) => (
          <RestoContainer key={restaurant.info.id} restoObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
