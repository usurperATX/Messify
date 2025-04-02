import React, { useState } from "react";
import "./NonVegMess.css";
import Suggestion from "./Suggestion"; // Import Suggestion component

const nonVegMessMenu = {
  Monday: { Breakfast: "Egg Sandwich", Lunch: "Chicken Curry", Dinner: "Mutton Biryani" },
  Tuesday: { Breakfast: "Omelette & Toast", Lunch: "Fish Fry", Dinner: "Butter Chicken" },
  Wednesday: { Breakfast: "Scrambled Eggs", Lunch: "Prawn Masala", Dinner: "Chicken Biryani" },
  Thursday: { Breakfast: "Chicken Sausage", Lunch: "Grilled Fish", Dinner: "Beef Curry" },
  Friday: { Breakfast: "Eggs Benedict", Lunch: "Tandoori Chicken", Dinner: "Fish Curry" },
  Saturday: { Breakfast: "Cheese Omelette", Lunch: "Chicken Fried Rice", Dinner: "Lamb Chops" },
  Sunday: { Breakfast: "Bacon & Eggs", Lunch: "BBQ Chicken Wings", Dinner: "Seafood Paella" },
};

const NonVegMess = ({ setActivePage }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState({ foodItem: "", feasibility: "Yes" });

  const days = Object.keys(nonVegMessMenu);

  const nextDay = () => setCurrentDayIndex((prev) => (prev + 1) % days.length);
  const prevDay = () => setCurrentDayIndex((prev) => (prev - 1 + days.length) % days.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suggestion submitted:", suggestion);
    alert("Suggestion submitted successfully!"); // Display window alert
    setShowSuggestion(false); // Close modal after submission
  };

  return (
    <div className="non-veg-mess-container">
      <h1 className="title">Non-Veg Mess</h1>
      <div className="day-selector">
        <button onClick={prevDay}>Prev</button>
        <h2>{days[currentDayIndex]}</h2>
        <button onClick={nextDay}>Next</button>
      </div>

      <div className="meal-section">
        {Object.entries(nonVegMessMenu[days[currentDayIndex]]).map(([meal, item]) => (
          <div key={meal} className="meal-box">
            <h3>{meal}</h3>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <button className="suggest-button" onClick={() => setShowSuggestion(true)}>Suggest an Item</button>

      {showSuggestion && (
        <Suggestion
          suggestion={suggestion}
          setSuggestion={setSuggestion}
          handleSubmit={handleSubmit}
          setShowSuggestion={setShowSuggestion}
        />
      )}

      <button className="home-button" onClick={() => setActivePage('welcome')}>Back to Home</button>
    </div>
  );
};

export default NonVegMess;
