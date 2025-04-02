import React from 'react';
import './NightMess.css';

const NightMess = ({setActivePage}) => {
  const menuItems = [
    { id: 1, name: "Grilled Cheese Sandwich", description: "Classic grilled cheese with a side of tomato soup" },
    { id: 2, name: "Chicken Nuggets", description: "Served with your choice of dipping sauce" },
    { id: 3, name: "Pizza Slice", description: "Hot and fresh pizza slice with your favorite toppings" },
    { id: 4, name: "Mac and Cheese", description: "Creamy mac and cheese" },
    { id: 5, name: "Ramen", description: "Instant ramen with an egg and scallions" },
    { id: 6, name: "Tater Tots", description: "Crispy tater tots served with ketchup" },
    { id: 7, name: "Quesadilla", description: "Cheese quesadilla with sour cream and salsa" },
    { id: 8, name: "Breakfast Burrito", description: "Scrambled eggs, cheese, and sausage in a warm tortilla" },
    { id: 9, name: "Chicken Wrap", description: "Chicken and lettuce" }
  ];

  return (
    <div className="night-mess-container">
      <div className="carousel-grid">
        {menuItems.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className="home-button" onClick={() => setActivePage('welcome')}>Back to Home</button>
    </div>
  );
};

export default NightMess;
