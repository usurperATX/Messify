import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [reportType, setReportType] = useState('student');
  const [complaint, setComplaint] = useState('');

  const handleReportGeneration = () => {
    // Add your report generation logic here
    console.log(`Generating report of type: ${reportType}`);
    alert(`Generating report of type: ${reportType}`);
  };

  const handleComplaintSubmission = () => {
    // Add your complaint submission logic here
    console.log("Complaint submitted:", complaint);
    alert("Complaint submitted successfully!");
    setComplaint(''); // Clear the complaint input after submission
  };

  return (
    <div className="dashboard-container">
      <h1 className="title">Dashboard</h1>

      {/* Report Generation Section */}
      <div className="report-section">
        <h2>Generate Report</h2>
        <div className="report-options">
          <label htmlFor="reportType">Report Type:</label>
          <select id="reportType" value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="student">Student-wise</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="meal">Meal-wise</option>
          </select>
        </div>
        <button onClick={handleReportGeneration}>Generate Report</button>
      </div>

      {/* Complaint/Issue Submission Section */}
      <div className="complaint-section">
        <h2>Submit Complaint/Issue</h2>
        <div className="complaint-input">
          <label htmlFor="complaint">Complaint/Issue:</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="4"
            cols="50"
          />
        </div>
        <button onClick={handleComplaintSubmission}>Submit Complaint</button>
      </div>
    </div>
  );
};

export default Dashboard;
