/* eslint-disable react/prop-types */
import React, { useState } from "react";

function CategoriesList({
  categories = [],
  areas = [],
  ingredients = [],
  activeCritreia = null,
  setActiveCritreia,
}) {
  const normalTagClass =
    "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 cursor-pointer m-2";
  const activeTagClass =
    "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 cursor-pointer m-2";
  const [isFilterActive, setIsFilterActive] = useState(true);
  const [ingredientCount, setIngredientCount] = useState(20);
  return (
    <div className="mx-auto mt-4 max-w-screen-xl">
      <button
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        onClick={() => setIsFilterActive(!isFilterActive)}
      >
        {isFilterActive ? "Hide" : "Show"} Filters
      </button>
      {activeCritreia && (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
          <span className="font-medium">Criteria Type:</span>{" "}
          {activeCritreia.type} <br />
          <span className="font-medium">Criteria:</span>{" "}
          {activeCritreia.criteria}
        </div>
      )}

      {isFilterActive && (
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Categories</h2>
          <ul className="flex flex-wrap">
            {categories &&
              categories.map((category, index) => (
                <span
                  key={index}
                  className={
                    activeCritreia.criteria === category.strCategory
                      ? activeTagClass
                      : normalTagClass
                  }
                  onClick={() =>
                    setActiveCritreia({
                      criteria: category.strCategory,
                      type: "categories",
                    })
                  }
                >
                  {category.strCategory}
                </span>
              ))}
          </ul>
          <h2 className="text-xl font-semibold text-black mb-4">Areas</h2>
          <ul className="flex flex-wrap">
            {areas &&
              areas.map((area, index) => (
                <span
                  key={index}
                  className={
                    activeCritreia.criteria === area.strArea
                      ? activeTagClass
                      : normalTagClass
                  }
                  onClick={() =>
                    setActiveCritreia({
                      criteria: area.strArea,
                      type: "areas",
                    })
                  }
                >
                  {area.strArea}
                </span>
              ))}
          </ul>
          <h2 className="text-xl font-semibold text-black mb-4">Ingredients</h2>
          <ul className="flex flex-wrap">
            {ingredients &&
              ingredients
                .slice(0, ingredientCount)
                .map((ingredients, index) => (
                  <span
                    key={index}
                    className={
                      activeCritreia.criteria === ingredients.strIngredient
                        ? activeTagClass
                        : normalTagClass
                    }
                    onClick={() =>
                      setActiveCritreia({
                        criteria: ingredients.strIngredient,
                        type: "ingredients",
                      })
                    }
                  >
                    {ingredients.strIngredient}
                  </span>
                ))}

            {ingredients.length > ingredientCount && (
              <>
                <button
                  className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 cursor-pointer"
                  onClick={() => setIngredientCount(ingredientCount + 20)}
                >
                  Load more
                </button>
              </>
            )}
            {ingredientCount > 20 && (
              <>
                <button
                  className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 cursor-pointer"
                  onClick={() => setIngredientCount(ingredientCount - 20)}
                >
                  Load less
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoriesList;
