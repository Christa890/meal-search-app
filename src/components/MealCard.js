import React from "react";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
      <h3 className="meal-title">{meal.strMeal}</h3>
      <p className="meal-instructions">
        {meal.strInstructions.substring(0, 100)}...
      </p>
    </div>
  );
};

export default MealCard;
