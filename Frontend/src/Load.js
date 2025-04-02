import React, { useEffect, useState } from "react";
import "./Load.css";

const Load = () => {
  const [mergeDots, setMergeDots] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMergeDots(true);
    }, 2000);
  }, []);

  return (
    <div className="loading-screen">
      <div className={`dots-container ${mergeDots ? "merged" : ""}`}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Load;
