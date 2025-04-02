// Updated Dashboard.jsx
import React, { useState, useContext } from 'react';
import { useMess } from './MessContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dashboard.css';

const Dashboard = () => {
  const { state, dispatch } = useMess();
  const [reportType, setReportType] = useState('student');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [complaint, setComplaint] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const generateReport = async (type) => {
    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          reportType,
          startDate,
          endDate,
          mealType,
          userId: state.user.id
        })
      });
      const data = await response.json();
      // Handle report download
    } catch (error) {
      console.error('Report generation failed:', error);
    }
  };

  const submitComplaint = async () => {
    if (!complaint.trim()) return;
    
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          userId: state.user.id,
          complaintText: complaint,
          mealType
        })
      });
      // Handle response
    } catch (error) {
      console.error('Complaint submission failed:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="title">Welcome, {state.user?.name}</h1>

      {/* Enhanced Report Section */}
      <div className="report-section">
        <h2>📊 Generate Custom Report</h2>
        <div className="report-grid">
          <div className="form-group">
            <label>Report Type:</label>
            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="student">Student-wise</option>
              <option value="hostel">Hostel-wise</option>
              <option value="meal">Meal-wise</option>
              <option value="duration">Duration-wise</option>
            </select>
          </div>

          {reportType === 'duration' && (
            <div className="date-range">
              <label>Date Range:</label>
              <div className="date-pickers">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Meal Type:</label>
            <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="snacks">Snacks</option>
              <option value="dinner">Dinner</option>
              <option value="night">Night Mess</option>
            </select>
          </div>
        </div>
        <button onClick={generateReport}>
          ⬇️ Generate {reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report
        </button>
      </div>

      {/* Enhanced Complaint Section */}
      <div className="complaint-section">
        <h2>⚠️ Submit Complaint/Feedback</h2>
        <div className="complaint-input">
          <select 
            value={mealType} 
            onChange={(e) => setMealType(e.target.value)}
            className="meal-select"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
            <option value="night">Night Mess</option>
          </select>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your issue or suggestion..."
          />
        </div>
        <button onClick={submitComplaint}>🚀 Submit Complaint</button>
      </div>
    </div>
  );
};
