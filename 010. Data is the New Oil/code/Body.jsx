import "./Body.scss";
import RestaurantCard, { withVegLabel } from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import ShimmerList from "./ShimmerList.jsx";
import { Link } from "react-router-dom";
import Cors from "./Cors.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  console.log("Main page");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  let filteredList = listOfRestaurants;
  const handleClick = () => {
    filteredList = listOfRestaurants.filter((value) => {
      return value.info.avgRating > 4.5;
    });
    setListOfRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((data) =>
      data.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false) return <h1>Looks like you are offline!</h1>;
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants([
        ...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
        ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
      setFilteredRestaurant([
        ...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
        ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
    } catch (err) {
      setListOfRestaurants(null);
    }
  };

  if (listOfRestaurants === null) return <Cors />;

  return listOfRestaurants.length === 0 ? (
    <ShimmerList />
  ) : (
    <div className="body">
      <div className="body-main">
        <button className="filter-btn" onClick={handleClick}>
          Filter Top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      {/* Code goes here */}
      <div className="res-list">
        {filteredRestaurant.map((value, index) => (
          <Link key={value?.info?.id} to={`/restaurants/${value?.info?.id}`}>
            {value?.info?.veg ? (
              <RestaurantCardVeg data={value} />
            ) : (
              <RestaurantCard data={value} />
            )}
          </Link>
        ))}
      </div>
      {/* Code ends here */}
    </div>
  );
};

export default Body;
