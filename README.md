# Messify - Mess Menu Formation System

## Overview

Messify is a web application designed to streamline the mess menu formation process for educational institutions. It allows administrators to collect food preferences, suggestions, and other relevant data from students, and generate reports for informed decision-making regarding mess menus.  It provides simple page navigation to ensure student engagement.

## Features

-   **User-Friendly Interface**: A clean and intuitive design for easy navigation and data input.
-   **Mess Menu Categorization**: Categorization of mess menus into Veg, Non-Veg, Special, and Night Mess options.
-   **Data Collection**: Collection of student data including registration number, name, block, room number, dining mess, and mess type.
-   **Food Suggestion System**: A feature for students to provide food item suggestions for different meal types.
-   **Feasibility Assessment**: An option to mark food suggestions as feasible or not feasible for mass production.
-   **Report Generation**: Generation of reports (Excel/PDF format) based on various criteria such as student-wise, monthly, weekly, and meal-wise data.
-   **Complaint/Issue Submission**: A platform for students to submit complaints or issues related to the mess.
-   **Simple Page Navigation**: A simple page navigation that allows users to navigate through various pages with ease.

## Components

-   **Navbar**: Navigation bar for easy access to different mess categories and the dashboard.
-   **Login**: Authentication page for users to log in.
-   **VegMess**: Displays the Veg Mess menu and allows users to submit food suggestions.
-   **NonVegMess**: Displays the Non-Veg Mess menu and allows users to submit food suggestions.
-   **SpecialMess**: Displays the Special Mess menu and allows users to submit food suggestions.
-   **NightMess**: Displays the Night Mess menu with a scrollable carousel of food items.
-   **Dashboard**: A central hub for generating reports and submitting complaints.
-   **Welcome**: A welcome page of the application.
-   **Suggestion**: A Component to create a food item suggestion popup with various options.

## Technologies Used

-   React.js
-   CSS
-   JavaScript
-   MySQL (Backend)

## Setup Instructions

### 1. Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: Download and install the latest LTS version from [https://nodejs.org/](https://nodejs.org/)
*   **npm (Node Package Manager)**:  This comes with Node.js. Verify the installation by running `npm -v` in your terminal.
*   **Git**: Download and install from [https://git-scm.com/](https://git-scm.com/) Verify the installation by running `git --version` in your terminal.
*   **MySQL**:  Download and install a MySQL server and client.  You can use MySQL Community Server (free) from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/).  You'll also likely want a GUI client like MySQL Workbench or DBeaver to manage your database.

### 2. Clone the Repository

1.  Create a GitHub account (if you don't have one) at [https://github.com/](https://github.com/).
2.  Create a new repository on GitHub.  Give it a name (e.g., `messify`) and a description.
3.  Clone the repository to your local machine using Git:

git clone [repository_url]

text

Replace `[repository_url]` with the actual URL of your GitHub repository.

### 3. Install Dependencies

1.  Navigate to the project directory:

cd messify

text

2.  Install the required npm packages:

npm install

text

This command reads the `package.json` file and installs all the necessary dependencies, including React, CSS modules, and other libraries used in the project.

### 4. Configure the Backend (MySQL)

1.  **Create a Database**:  Using your MySQL client (e.g., MySQL Workbench), create a new database for Messify (e.g., `messify_db`).
2.  **Create Tables**:  Define the database tables required to store student data, food suggestions, complaints, etc.  Here's a basic example of a table structure:

CREATE TABLE students (
reg_no VARCHAR(255) PRIMARY KEY,
student_name VARCHAR(255),
block VARCHAR(255),
room_number VARCHAR(255),
dining_mess VARCHAR(255),
mess_type VARCHAR(255)
);

CREATE TABLE food_suggestions (
id INT AUTO_INCREMENT PRIMARY KEY,
reg_no VARCHAR(255),
food_item VARCHAR(255),
meal_type VARCHAR(255),
feasibility VARCHAR(255),
FOREIGN KEY (reg_no) REFERENCES students(reg_no)
);

CREATE TABLE complaints (
id INT AUTO_INCREMENT PRIMARY KEY,
reg_no VARCHAR(255),
complaint_text TEXT,
FOREIGN KEY (reg_no) REFERENCES students(reg_no)
);

text

Adjust the table structure based on your specific requirements.

3.  **Create a `.env` File**: In the root of your project (the same directory as `package.json`), create a file named `.env`.  This file will store your database connection details (and other sensitive information).  **Make sure `.env` is in your `.gitignore` file!**

DATABASE_HOST=localhost # Or your database server address
DATABASE_USER=your_mysql_user
DATABASE_PASSWORD=your_mysql_password
DATABASE_NAME=messify_db
DATABASE_PORT=3306 # Usually 3306 for MySQL

text

Replace `your_mysql_user`, `your_mysql_password`, and `messify_db` with your actual MySQL credentials and database name.

4.  **Install a MySQL Connector**:  You'll need a library to connect to MySQL from your Node.js backend.  A popular choice is `mysql2`:

npm install mysql2

text

5.  **Configure Backend Connection**: Modify your backend code (this part is still to be implemented by you) to use the environment variables to connect to your MySQL database.  Here's a basic example using `mysql2`:

const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env

const pool = mysql.createPool({
host: process.env.DATABASE_HOST,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME,
port: process.env.DATABASE_PORT,
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});

// Example query
pool.query('SELECT * FROM students', (err, results) => {
if (err) {
console.error(err);
} else {
console.log(results);
}
});

module.exports = pool.promise(); // Export a promise-based pool

text

You'll need to adapt this code to your specific backend setup.

### 5. Start the Application

1.  Start the React development server:

npm start

text

This will typically start the application at `http://localhost:3000` (or a similar address).

### 6. Run the backend

1.  Start the backend. Make sure that you point to the proper directory for the backend or it will not work.

node index.js

## Usage

1.  Navigate to the application URL in your web browser (usually `http://localhost:3000`).
2.  Log in using your credentials (implement user authentication as part of the backend).
3.  Use the navigation bar to access different mess categories and the dashboard.
4.  Submit food suggestions and complaints through the respective components.
5.  Generate reports from the dashboard based on your requirements.

## Backend Integration (To Do)

-   Implement the backend logic to store data in the MySQL database.
-   Implement user authentication (e.g., using bcrypt for password hashing and JWT for authentication).
-   Implement the report generation functionality in Excel/PDF format (consider using libraries like `exceljs` or `pdfmake`).
-   Implement the complaint submission functionality to store and process complaints.
-   Add proper error handling and validation to the backend API endpoints.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.


