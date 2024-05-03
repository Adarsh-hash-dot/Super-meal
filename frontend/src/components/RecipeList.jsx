/* eslint-disable react/prop-types */
import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ meals }) {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-wrap -mx-4 max-w-screen-xl">
        {meals ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 grid place-items-center"
            >
              <RecipeCard meal={meal} />
            </div>
          ))
        ) : (
          <div>
            <img src="/no-data.svg" alt="" srcSet="" className="h-72 w-60" />
            <p className="text-center font-bold font-mono">No Meals Found</p>
          </div>
        )}
        {}
      </div>
    </div>
  );
}

export default RecipeList;
