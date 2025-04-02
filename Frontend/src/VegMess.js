import React, { useState } from "react";
import "./VegMess.css";
import Suggestion from "./Suggestion"; // Import Suggestion component

const vegMessMenu = {
  Monday: { Breakfast: "Aloo Paratha", Lunch: "Paneer Butter Masala", Dinner: "Veg Biryani" },
  Tuesday: { Breakfast: "Idli & Sambar", Lunch: "Chole Bhature", Dinner: "Dal Tadka" },
  Wednesday: { Breakfast: "Poha", Lunch: "Veg Pulao", Dinner: "Matar Paneer" },
  Thursday: { Breakfast: "Dosa", Lunch: "Mixed Veg Curry", Dinner: "Khichdi" },
  Friday: { Breakfast: "Upma", Lunch: "Rajma Chawal", Dinner: "Aloo Gobi" },
  Saturday: { Breakfast: "Besan Chilla", Lunch: "Sambar Rice", Dinner: "Dum Aloo" },
  Sunday: { Breakfast: "Poori Bhaji", Lunch: "Special Veg Thali", Dinner: "Kadhai Paneer" },
};

const VegMess = ({setActivePage}) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState({ foodItem: "", feasibility: "Yes" });

  const days = Object.keys(vegMessMenu);

  const nextDay = () => setCurrentDayIndex((prev) => (prev + 1) % days.length);
  const prevDay = () => setCurrentDayIndex((prev) => (prev - 1 + days.length) % days.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suggestion submitted:", suggestion);
    setShowSuggestion(false); // Close modal after submission
  };

  return (
    <div className="veg-mess-container">
      <h1 className="title">Veg Mess</h1>
      <div className="day-selector">
        <button onClick={prevDay}>Prev</button>
        <h2>{days[currentDayIndex]}</h2>
        <button onClick={nextDay}>Next</button>
      </div>

      <div className="meal-section">
        {Object.entries(vegMessMenu[days[currentDayIndex]]).map(([meal, item]) => (
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

export default VegMess;
