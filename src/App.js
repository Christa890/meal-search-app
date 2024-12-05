import React, { useState, useEffect } from "react";
import "./App.css";
import MealCard from "./components/MealCard";
import { fetchMeals } from "./services/fetchMeals";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce the searchTerm
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearch=function(e){
    setSearchTerm(e.target.value)
  }

  // Fetch meals whenever the debouncedSearch value changes
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setMeals([]);
      return;
    }

    const fetchAndSetMeals = async () => {
      const fetchedMeals = await fetchMeals(debouncedSearch);
      setMeals(fetchedMeals);
    };

    fetchAndSetMeals();
  }, [debouncedSearch]);

  return (
    <div className="app-container">
      <h1>Meal Search</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-box"
      />
      <div className="meals-container">
        {meals.length === 0 ? (
          <p>No results found.</p>
        ) : (
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  );
};

export default App;
