Mess Management System
Overview
The Mess Management System is a web-based application built using React.js for the frontend and Node.js with Express.js for the backend. It integrates with a MySQL database to manage and display mess menus, submit and view reports, and export data as Excel files. The system features a dashboard for managing hostel, student, meal, duration reports, and suggestions.

Features
Mess Menu System:

View mess menus for different days, meals, and mess types (Veg Mess, Non-Veg Mess, Special Mess, Night Mess).

Dashboard:

Submit reports for hostel-wise, student-wise, meal-wise, and duration-wise categories.

View all submitted reports.

Export reports as Excel files.

Submit suggestions.

Excel Export:

Export backend MySQL data to Excel files using xlsx and file-saver.

Technologies Used
Frontend:
React.js

CSS for styling

xlsx and file-saver for Excel export

Backend:
Node.js

Express.js

MySQL database

dotenv for environment variables

cors for cross-origin resource sharing

morgan for logging HTTP requests

Folder Structure
Backend (mpBackend)
text
mpBackend/
├── config/
│   └── db.js                # Database connection setup
├── controllers/
│   ├── durationController.js
│   ├── hostelController.js
│   ├── mealController.js
│   ├── studentController.js
│   └── suggestionController.js
├── routes/
│   ├── durationRoutes.js
│   ├── hostelRoutes.js
│   ├── mealRoutes.js
│   ├── studentRoutes.js
│   └── suggestionRoutes.js
├── .env                     # Environment variables (e.g., DB credentials)
├── package.json             # Backend dependencies
├── server.js                # Main server file
└── testDB.js                # Test database connection script
Frontend (mpFrontend)
text
mpFrontend/
├── public/
├── src/
│   ├── services/            # API service files (e.g., Axios setup)
│   ├── App.css              # Global styles for the app
│   ├── App.js               # Main React component
│   ├── Dashboard.css        # Styles for the dashboard component
│   ├── Dashboard.js         # Dashboard functionality (report submission/export)
│   ├── Home.css             # Styles for home page component
│   ├── index.css            # Styles for index file
│   ├── index.js             # Entry point for React app
│   ├── Load.css             # Loading screen styles
│   ├── Load.js              # Loading screen component
│   ├── Login.css            # Styles for login page component
│   ├── Login.js             # Login functionality component
│   ├── Navbar.css           # Styles for navigation bar component
│   ├── Navbar.js            # Navigation bar functionality component
│   ├── NightMess.css        # Styles for night mess page component
│   ├── NightMess.js         # Night mess functionality component
│   ├── NonVegMess.css       # Styles for non-veg mess page component
│   ├── NonVegMess.js        # Non-veg mess functionality component
│   ├── SpecialMess.css      # Styles for special mess page component
│   ├── SpecialMess.js       # Special mess functionality component
│   ├── Suggestion.css       # Styles for suggestions page component
│   ├── Suggestion.js        # Suggestions functionality component
│   ├── VegMess.css          # Styles for veg mess page component
│   ├── VegMess.js           # Veg mess functionality component
│   └── Welcome.css          # Welcome page styles and functionality components (Welcome.js)
├── .gitignore               # Files/folders to ignore in Git tracking (e.g., node_modules)
├── package.json             # Frontend dependencies 
└── README.md                # Project documentation (this file)
Installation
Prerequisites:
Node.js installed on your system.

MySQL database set up with the required schema.

Backend Setup:
Navigate to the backend folder:

bash
cd mpBackend/
Install dependencies:

bash
npm install
Create a .env file in the mpBackend/ directory with the following content:

text
PORT=8000
DB_HOST=localhost     // Your MySQL host address 
DB_USER=root          // Your MySQL username 
DB_PASSWORD=password  // Your MySQL password 
DB_NAME=mess_system_db // Your database name 
Start the backend server:

bash
npm run server 
Frontend Setup:
Navigate to the frontend folder:

bash
cd mpFrontend/
Install dependencies:

bash
npm install 
Start the frontend development server:

bash
npm start 
Endpoints
Backend API Endpoints (http://localhost:8000/api/v1)
Endpoint	Method	Description
/hostel/create	POST	Create a new hostel report
/hostel/getall	GET	Fetch all hostel reports
/student/create	POST	Create a new student report
/student/getall	GET	Fetch all student reports
/meal/create	POST	Create a new meal report
/meal/getall	GET	Fetch all meal reports
/duration/create	POST	Create a new duration report
/duration/getall	GET	Fetch all duration reports
/suggestions/create	POST	Submit a suggestion
/suggestions/getall	GET	Fetch all suggestions
Dependencies
Backend (mpBackend/package.json)
json
"dependencies": {
  "colors": "^1.4.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^5.1.0",
  "express-list-endpoints": "^7.1.1",
  "morgan": "^1.10.0",
  "mysql2": "^3.14.0",
  "nodemon": "^3.1.9"
}
Frontend (mpFrontend/package.json)
json
"dependencies": {
  "@testing-library/jest-dom": "^5.16.5",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^14.4.3",
  "axios": "^1.3.5",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "xlsx": "^0.18.5",
  "file-saver": "^2.0.5"
}
Usage
Open the frontend at http://localhost:3000.

Navigate through mess menus or access the dashboard.

Submit or view reports based on type (hostel/student/meal/duration/suggestions).

Export reports as Excel files.
