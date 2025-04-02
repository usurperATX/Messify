import React from "react";
import "./Suggestion.css";

const Suggestion = ({ suggestion, setSuggestion, handleSubmit, setShowSuggestion }) => {
  return (
    <div className="suggestion-modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food item"
          value={suggestion.foodItem}
          onChange={(e) => setSuggestion({ ...suggestion, foodItem: e.target.value })}
          required
        />
        <label>
          Feasible:
          <input
            type="radio"
            name="feasibility"
            value="Yes"
            checked={suggestion.feasibility === "Yes"}
            onChange={(e) => setSuggestion({ ...suggestion, feasibility: e.target.value })}
          />
        </label>
        <label>
          Not Feasible:
          <input
            type="radio"
            name="feasibility"
            value="No"
            checked={suggestion.feasibility === "No"}
            onChange={(e) => setSuggestion({ ...suggestion, feasibility: e.target.value })}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowSuggestion(false)}>Back to Menu</button>
        </div>
      </form>
    </div>
  );
};

export default Suggestion;
