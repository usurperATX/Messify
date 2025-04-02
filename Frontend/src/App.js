import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Load from "./Load";
import Dashboard from "./Dashboard";
import VegMess from "./VegMess";
import NonVegMess from "./NonVegMess";
import SpecialMess from "./SpecialMess";
import NightMess from "./NightMess";
import Welcome from "./Welcome";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("login");

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setActivePage("welcome");
      }, 3000);
    }
  }, [isLoading]);

  const handleLogin = () => {
    setLoggedIn(true);
    setIsLoading(true);
  };

  return (
    <div className="App">
      {isLoading && <Load />}
      {!isLoading && (
        <>
          {loggedIn && <Navbar setActivePage={setActivePage} />}
          {activePage === "login" && <Login setLoggedIn={handleLogin} />}
          {activePage === "welcome" && <Welcome setActivePage={setActivePage} />}
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "veg-mess" && <VegMess setActivePage={setActivePage} />}
          {activePage === "non-veg-mess" && <NonVegMess setActivePage={setActivePage} />}
          {activePage === "special-mess" && <SpecialMess setActivePage={setActivePage} />}
          {activePage === "night-mess" && <NightMess setActivePage={setActivePage} />}
        </>
      )}
    </div>
  );
}

export default App;
