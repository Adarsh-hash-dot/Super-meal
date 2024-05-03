import React, { useEffect, useState } from "react";
import { CategoriesList, FilterRecipeCard } from "../components";

const FiltersPage = () => {
  const BaseURL = "http://localhost:3000";
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [activeCritreia, setActiveCritreia] = useState([]);
  const [filterMeals, setFilterMeals] = useState(null);

  const fetchAllCreterias = async () => {
    const URLs = ["/categories", "/areas", "/ingredients"];
    const result = await Promise.all(
      URLs.map((url) => {
        return fetch(`${BaseURL}${url}`).then((response) => response.json());
      })
    );
    setCategories(result[0].meals);
    setAreas(result[1].meals);
    setIngredients(result[2].meals);
  };

  const filterBasedOnCriteria = async (criteriaObj) => {
    // {"criteria":"Chopped Tomatoes","type":"ingredients"}
    const URLs = {
      ingredients: "/filterByIngredient/",
      categories: "/filterByCategory/",
      areas: "/filterByArea/",
    };

    const data = await fetch(
      `${BaseURL}${URLs[criteriaObj.type]}${criteriaObj.criteria}`
    ).then((response) => response.json);

    await setFilterMeals(data.meals);
  };

  const setCreiteria = async (criteriaObj) => {
    setActiveCritreia(criteriaObj);
    const URLs = {
      ingredients: "/filterByIngredient/",
      categories: "/filterByCategory/",
      areas: "/filterByArea/",
    };

    const data = await fetch(
      `${BaseURL}${URLs[criteriaObj.type]}${criteriaObj.criteria}`
    ).then((response) => response.json());

    console.log(data);

    await setFilterMeals(data.meals);
  };

  useEffect(() => {
    fetchAllCreterias();
  }, []);

  return (
    <div>
      <CategoriesList
        categories={categories}
        areas={areas}
        ingredients={ingredients}
        activeCritreia={activeCritreia}
        setActiveCritreia={setCreiteria}
      ></CategoriesList>

      <div className="grid place-items-center min-h-[70vh] mt-10  ">
        <div className="flex flex-wrap max-w-screen-xl">
          {filterMeals ? (
            filterMeals.map((meal, index) => (
              <>
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 pr-4 mb-4 grid place-items-center"
                >
                  <FilterRecipeCard meal={meal} />;
                </div>
              </>
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
    </div>
  );
};

export default FiltersPage;
