import React, { useEffect, useState } from "react";
import { RecipeList } from "../components";

const FavoriteMeals = () => {
  const [favorites, setFavorites] = useState({});

  const loadFavorites = () => {
    let favoriteLocalStorage = localStorage.getItem("favorites");
    if (favoriteLocalStorage) {
      setFavorites(JSON.parse(favoriteLocalStorage));
    }
  };

  const computeFavorites = () => {
    const meals = [];

    for (const key in favorites) {
      if (favorites[key] != null) {
        meals.push(favorites[key]);
      }
    }

    console.log("mea", meals);

    return meals;
  };
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <div className="grid place-items-center">
      {computeFavorites().length === 0 && (
        <>
          <div className="grid place-items-center mt-10">
            <img src="/add_favorite.svg" className="h-60 w-60" />
            <h5 className="text-yellow-700 font-bold font-mono text-2xl mt-5">
              Try Adding Some Favourites
            </h5>
          </div>
        </>
      )}
      <RecipeList
        meals={computeFavorites()}
        loadFavorites={loadFavorites}
        favorites={favorites}
      ></RecipeList>
    </div>
  );
};

export default FavoriteMeals;
