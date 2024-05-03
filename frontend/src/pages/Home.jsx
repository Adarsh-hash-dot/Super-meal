import React, { useState, useEffect } from "react";
import {
  FavoriteRecipes,
  FilterOptions,
  Header,
  RecipeDetails,
  RecipeList,
  SearchBar,
  ShoppingList,
  CategoriesList,
  Footer,
} from "../components";
const Home = () => {
  const [meals, setMeals] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const BaseURL = "http://localhost:3000";

  const onSearch = async (query) => {
    const data = await fetch(`${BaseURL}/search?s=${query}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
    setMeals(data.meals);
  };

  useEffect(() => {
    onSearch("");
  }, []);

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, hsla(0, 0%, 100%, 0.7), hsla(0, 0%, 100%, 0.7)),url("/onboarding-bg.svg")',
      }}
      className="h-[90vh] "
    >
      <SearchBar onSearch={onSearch}></SearchBar>
      <CategoriesList></CategoriesList>
      <RecipeList meals={meals}></RecipeList>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
