/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ meal, loadFavorites, favorites }) {
  const computeIngredient = () => {
    const ingredients = [];
    for (const key in meal) {
      if (key.includes("strIngredient") && meal[key] !== "") {
        // if (ingredients.length === 7) {
        //   return ingredients;
        // }
        ingredients.push(key);
      }
    }
    return ingredients;
  };
  const toggleFavorite = (mealID, data) => {
    let favorites = localStorage.getItem("favorites");
    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify({}));
      favorites = {};
    } else {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    }
    console.log("wo");
    if (favorites[mealID]) {
      favorites[mealID] = null;
    } else {
      favorites[mealID] = data;
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-64 w-full min-w-72">
        <img
          className="rounded-t-lg h-full w-full"
          src={meal.strMealThumb}
          alt=""
        />
      </div>

      <div className="p-5">
        <Link>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-wrap justify-between">
            <span>{meal.strMeal}</span>{" "}
            <span onClick={() => toggleFavorite(meal.idMeal, meal)}>
              {favorites[meal.idMeal] == null ? "🤍" : "❤️"}
            </span>
          </h5>
        </Link>
        <p className="flex flex-wrap justify-start max-h-14 overflow-hidden">
          {computeIngredient().map((ingredient) => (
            <span
              key={ingredient}
              className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 m-1"
            >
              {meal[ingredient]}
            </span>
          ))}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {meal.strInstructions}
        </p>
        <Link
          to={`/mealinfo/${meal.idMeal}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
