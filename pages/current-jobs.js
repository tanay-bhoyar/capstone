// components/Current.js
import React, { useEffect, useState } from 'react'; // Import useEffect and useState from React
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Link from 'next/link'; // Import Link from next/link
import '../styles/current.css';
import Sidebar2 from '../components/sidebar2';
import NavBar from '../components/NavBar';

const Current = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter(); // Initialize the router

  // Function to handle resize
  const handleResize = () => {
    setIsSidebarVisible(window.innerWidth >= 768); // Set sidebar visibility based on window width
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const handleFilterClick = () => {
    // Implement filter logic here
    console.log("Filter button clicked");
  };

  const handleExportClick = () => {
    // Implement export logic here
    console.log("Export to Excel button clicked");
  };

  return (
    <div className="dashboard-container">
      <NavBar/>
      <div className="dashboard-content">
        {isSidebarVisible && <Sidebar2 />} {/* Conditionally render sidebar */}

        <div className="main-content">
          <div className="header">
            <h1>Current Jobs</h1>
          </div>
          <div className="date-range">
            <input type="date" id="startDate" defaultValue="2023-01-01" />
            <input type="date" id="endDate" defaultValue="2023-03-10" />
            <button id="filterButton" onClick={handleFilterClick}>Filter</button>
          </div>
          <button id="exportButton" onClick={handleExportClick}>Export to Excel</button>
          <table>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>User ID</th>
                <th>Applications</th>
              </tr>
            </thead>
            <tbody id="jobTableBody">
              {/* Job rows will be populated here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Current;
