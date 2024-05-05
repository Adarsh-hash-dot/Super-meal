import React, { useState, useEffect } from "react";
import {
  FavoriteRecipes,
  FilterOptions,
  Header,
  RecipeList,
  SearchBar,
  ShoppingList,
  CategoriesList,
  Footer,
} from "../components";
const Home = () => {
  const [meals, setMeals] = useState(null);
  const [suggestMeals, setSuggestMeals] = useState(null);
  const [favorites, setFavorites] = useState({});
  const BaseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

  const onSearch = async (query) => {
    const data = await fetch(`${BaseURL}/search?s=${query}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    setMeals(data.meals);
  };

  const onSearchFirstLetter = async (query) => {
    query = query[0];
    const data = await fetch(`${BaseURL}/mealsByFirstLetter?f=${query}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    setSuggestMeals(data.meals);
  };

  const loadFavorites = () => {
    let favoriteLocalStorage = localStorage.getItem("favorites");
    if (favoriteLocalStorage) {
      setFavorites(JSON.parse(favoriteLocalStorage));
    }
  };

  useEffect(() => {
    onSearch("");
    loadFavorites();
  }, []);

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, hsla(0, 0%, 100%, 0.7), hsla(0, 0%, 100%, 0.7)),url("/onboarding-bg.svg")',
      }}
      className="min-h-[90vh] "
    >
      <SearchBar
        onSearch={onSearch}
        suggestMeals={suggestMeals}
        onSearchFirstLetter={onSearchFirstLetter}
      ></SearchBar>
      <RecipeList
        meals={meals}
        loadFavorites={loadFavorites}
        favorites={favorites}
      ></RecipeList>
    </div>
  );
};

export default Home;
