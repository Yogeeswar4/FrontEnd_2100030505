import React, { useState } from 'react';
import './Employee.css'; // Import Employee.css file

const EmployeeDetails = () => {
  const [showDetails, setShowDetails] = useState(true); // State to manage the visibility of employee details

  // Function to toggle the visibility of employee details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="employee-details">
      <div className="employee-heading">Employee Details</div>
      {showDetails && (
        <div className="input-group">
          {/* Input fields for employee details */}
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          {/* Add more input fields as needed */}
        </div>
      )}
      <button className="close-button" onClick={toggleDetails}>Close</button>
    </div>
  );
};

export default EmployeeDetails;
