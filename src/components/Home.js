import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Employee Details Website</h2>
      <p>Click on Employee to view more details:</p>
      {/* Image placeholders for employees */}
      <div>
        <Link to="/employee-details">
          <img src="emp.jpg" alt="Employee 1" />
        </Link>
    
      </div>
    </div>
  );
}

export default Home;
