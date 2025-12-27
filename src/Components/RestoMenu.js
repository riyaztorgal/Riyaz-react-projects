import React, { useEffect, useState } from "react";
import { RestorentMenu_API } from "../utils/constants";
import menuData from "../utils/menuData";
import Shimmer from "./Shimmer";
import RestoMenuCategory from "./RestoMenuCategory";

const RestoMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
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

  const category =
    menuData[0].data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-extrabold text-3xl my-6">{name}</h1>
      <p className="font-medium italic text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* list of accordions */}
      {category.map((category, index) => (
        <RestoMenuCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestoMenu;
