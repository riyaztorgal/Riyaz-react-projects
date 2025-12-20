import React, { useEffect, useState } from "react";
import { RestorentMenu_API } from "../utils/constants";
import menuData from "../utils/menuData";
import Shimmer from "./Shimmer";

const RestoMenu = () => {
  //  const [itemMenu, setItemMenu] = useState([]);

  // User fetch with online data

  /**
  useEffect(() => {
    fetchApi();
  });

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=229"
    );
    const json = await data.json();
    console.log(json);
  };*/

  const { name, cuisines, costForTwoMessage } =
    menuData[0].data.cards[2]?.card?.card?.info;

  const { itemCards, id } =
    menuData[0].data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  console.log(menuData);
  console.log(itemCards);
  // setItemMenu()

  return (
    <div className="restoMenuCard">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoMenu;
