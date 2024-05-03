/* eslint-disable react/no-unescaped-entities */
import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          About Super Meal App
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Super Meal App is your go-to destination for discovering delicious
          recipes from around the world. Whether you're a seasoned chef or a
          cooking novice, our app provides a vast collection of recipes to suit
          every taste and occasion.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to inspire and empower home cooks by offering a diverse
          range of recipes, from quick and easy meals to gourmet dishes. With
          our user-friendly interface and intuitive search features, finding the
          perfect recipe has never been easier.
        </p>
        <p className="text-lg text-gray-700">
          Join our community of food enthusiasts and embark on a culinary
          journey like no other. Whether you're cooking for yourself, your
          family, or hosting a dinner party, Super Meal App has everything you
          need to create memorable and delicious meals.
        </p>
      </div>
      <div className="grid place-items-center mt-10">
        <img src="/cooking.svg" className="h-60 w-60" />
        <h5 className="text-yellow-700 font-bold font-mono text-2xl mt-5">
          Welcome to Super Meal
        </h5>
      </div>
    </div>
  );
}

export default About;
