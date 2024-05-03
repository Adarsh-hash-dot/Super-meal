import React, { useState, useEffect } from "react";
import { ResponsiveYouTubeEmbed } from "./../components";
import { useParams, Link } from "react-router-dom";

function MealInfoPage() {
  const [mealData, setMealData] = useState(null);
  const BASE_URL = "http://localhost:3000";
  const { id } = useParams();

  const fetchDetails = async () => {
    const data = await fetch(`${BASE_URL}/mealDetails/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, id);
        return data;
      })
      .catch((error) => console.log(error));
    setMealData(data.meals[0]);
  };
  const computeIngredient = () => {
    const ingredients = [];
    for (const key in mealData) {
      if (
        key.includes("strIngredient") &&
        mealData[key] !== "" &&
        mealData[key] !== null
      ) {
        // if (ingredients.length === 7) {
        //   return ingredients;
        // }
        ingredients.push(key);
      }
    }
    return ingredients;
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="grid place-items-center">
      {mealData ? (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">{mealData.strMeal}</h2>
          <ResponsiveYouTubeEmbed youtubeUrl={mealData.strYoutube} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Meal image */}
            <div>
              <img
                src={mealData.strMealThumb}
                alt={mealData.strMeal}
                className="w-full rounded-lg"
              />
            </div>
            {/* Meal details */}
            <div>
              <p className="">
                <h5 className="my-3">Ingredient Required</h5>
                <div className="mt3 flex flex-wrap justify-start">
                  {computeIngredient().map((ingredient) => (
                    <span
                      key={ingredient}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium p-2 rounded dark:bg-yellow-900 dark:text-yellow-300 mr-3 mb-3 whitespace-nowrap"
                    >
                      {mealData[ingredient]}
                    </span>
                  ))}
                </div>
              </p>
              <p className="text-gray-700 mb-4 mt-5">
                Category: {mealData.strCategory}
              </p>
              <p className="text-gray-700 mb-4">Area: {mealData.strArea}</p>
              {/* Instructions */}
              <h3 className="text-xl font-semibold mb-2">Instructions</h3>
              <p className="text-gray-700 mb-8">{mealData.strInstructions}</p>
              {/* Ingredients */}
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-700 mb-8">
                {Object.keys(mealData).map((key) => {
                  if (key.includes("strIngredient") && mealData[key]) {
                    const ingredientNumber = key.replace("strIngredient", "");
                    const measureKey = `strMeasure${ingredientNumber}`;
                    return (
                      <li key={key}>
                        {mealData[key]} - {mealData[measureKey]}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              {/* Source */}
              <p className="text-sm text-gray-500 italic mb-4">
                Source:
                <Link to={mealData.strSource}>{mealData.strSource}</Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default MealInfoPage;
