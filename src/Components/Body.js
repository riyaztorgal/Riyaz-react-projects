import RestoContainer from "../Components/RestoContainer";
import restoList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restorentList, setRestorentList] = useState(restoList);
  return (
    <div className="body">
      <div className="searchBr">
        <button
          className="search-btn"
          onClick={() => {
            const filteredResto = restorentList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestorentList(filteredResto);
          }}
        >
          Top Rated Restorent
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setRestorentList(restoList);
          }}
        >
          Reset Filter
        </button>
      </div>

      <div className="rest0-card">
        {restorentList.map((restaurant) => (
          <RestoContainer key={restaurant.info.id} restoObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
