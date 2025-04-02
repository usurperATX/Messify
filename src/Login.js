import React, { useState } from "react";
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    hostelBlock: "",
    roomNo: "",
    caterer: "",
  });

  const [error, setError] = useState("");

  const regNoPattern = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/; // Example: 22ABC1234
  const mensHostelPattern = /^MH-[A-HJ-MP-TR]$/; // MH-A to MH-R (excluding I)
  const girlsHostelPattern = /^LH-[A-HJG]$/; // LH-A to LH-G (excluding I)
  const roomPattern = /^[0-9]{3,4}$/; // 3-4 digit room number

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const { name, regNo, hostelBlock, roomNo, caterer } = formData;

    if (!name.trim() || !regNo.trim() || !hostelBlock.trim() || !roomNo.trim() || !caterer.trim()) {
      return "All fields are required.";
    }
    if (!regNoPattern.test(regNo)) {
      return "Invalid Registration Number format (22ABC1234 required).";
    }
    if (!mensHostelPattern.test(hostelBlock) && !girlsHostelPattern.test(hostelBlock)) {
      return "Invalid Hostel Block (Format: MH-X or LH-X).";
    }
    if (!roomPattern.test(roomNo)) {
      return "Invalid Room Number (3-4 digits required).";
    }
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationError = validateInputs();

    if (validationError) {
      setError(validationError);
      return;
    }

    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    setLoggedIn(formData.name);
  };

  return (
    <div className="login-container">
      <div className="glow-circle"></div> {/* Glow Effect */}

      <h1 className="title">
        <span className="blue">Mess</span>
        <span className="white">ify</span>
      </h1>

      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login to Messify</h2>
        <p>Please enter your details below:</p>
        {error && <p className="error">{error}</p>}

        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="regNo" placeholder="Reg No (22BCE0000)" value={formData.regNo} onChange={handleChange} />

        <div className="hostel-room-container">
          <input type="text" name="hostelBlock" placeholder="Hostel Block (MH-A / LH-B)" value={formData.hostelBlock} onChange={handleChange} />
          <input type="text" name="roomNo" placeholder="Room No (Eg: 1234)" value={formData.roomNo} onChange={handleChange} />
        </div>

        <div className="caterer-container">
          <input type="text" name="caterer" placeholder="Caterer Name" value={formData.caterer} onChange={handleChange} />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
