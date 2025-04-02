import React, { useState } from "react";
import "./SpecialMess.css";
import Suggestion from "./Suggestion"; // Import Suggestion component

const specialMessMenu = {
  Monday: { Breakfast: 'Pancakes', Lunch: 'Pasta Alfredo', Dinner: 'Pizza Night' },
  Tuesday: { Breakfast: 'Waffles & Syrup', Lunch: 'Grilled Salmon', Dinner: 'Steak & Potatoes' },
  Wednesday: { Breakfast: 'French Toast', Lunch: 'Stuffed Peppers', Dinner: 'Lasagna' },
  Thursday: { Breakfast: 'Smoothie Bowl', Lunch: 'Shrimp Tacos', Dinner: 'Beef Stroganoff' },
  Friday: { Breakfast: 'Avocado Toast', Lunch: 'Chicken Caesar Salad', Dinner: 'Stuffed Chicken Breast' },
  Saturday: { Breakfast: 'Chia Pudding', Lunch: 'Vegetable Stir Fry', Dinner: 'Baked Ziti' },
  Sunday: { Breakfast: 'Bagels & Lox', Lunch: 'Brunch Buffet', Dinner: 'Roast Beef' }
};

const SpecialMess = ({ setActivePage }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState({ foodItem: "", feasibility: "Yes" });

  const days = Object.keys(specialMessMenu);

  const nextDay = () => setCurrentDayIndex((prev) => (prev + 1) % days.length);
  const prevDay = () => setCurrentDayIndex((prev) => (prev - 1 + days.length) % days.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suggestion submitted:", suggestion);
    alert("Suggestion submitted successfully!"); // Display window alert
    setShowSuggestion(false); // Close modal after submission
  };

  return (
    <div className="special-mess-container">
      <h1 className="title">Special Mess</h1>
      <div className="day-selector">
        <button onClick={prevDay}>Prev</button>
        <h2>{days[currentDayIndex]}</h2>
        <button onClick={nextDay}>Next</button>
      </div>

      <div className="meal-section">
        {Object.entries(specialMessMenu[days[currentDayIndex]]).map(([meal, item]) => (
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

export default SpecialMess;
