import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  FavoriteRecipes,
  FilterOptions,
  Header,
  RecipeList,
  SearchBar,
  ShoppingList,
  CategoriesList,
  Footer,
} from "./components";

import { Home, About, FavoriteMeals, MealInfo, FiltersPage } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<FavoriteMeals />} />
          <Route path="/mealinfo/:id" element={<MealInfo />} />
          <Route path="/filters" element={<FiltersPage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
