/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function SearchBar({ onSearch, onSearchFirstLetter, suggestMeals }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    if (query.length === 1) {
      onSearchFirstLetter(query);
    }
    setQuery(query);
  };
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const computeSuggestionVisibility = () => {
    return query.length > 0 && suggestMeals && isFocused;
  };

  return (
    <div className="pt-10 ">
      <form
        className="max-w-md mx-auto relative"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Search Meals..."
            value={query}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Search
          </button>
        </div>
        <div
          className={`absolute bg-white w-100 max-h-60 overflow-y-auto min-w-80 ${
            !computeSuggestionVisibility() && "hidden"
          }`}
        >
          <ul>
            {computeSuggestionVisibility() &&
              suggestMeals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="w-100 p-1 border-b-yellow-500 border-solid border-2"
                >
                  <Link to={`/mealinfo/${meal.idMeal}`}>
                    {" "}
                    <div>{meal.strMeal}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
