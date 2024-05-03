/* eslint-disable react/prop-types */
import React from "react";

function CategoriesList({ categories = [], onSelectCategory }) {
  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.idCategory}
            className="text-white hover:text-teal-500 cursor-pointer"
            onClick={() => onSelectCategory(category.strCategory)}
          >
            {category.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
