
import Link from 'next/link'; // Import Link from next/link
import '../styles/past.css';
import Sidebar2 from '../components/sidebar2';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const Past = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  

  // Function to handle resize
  const handleResize = () => {
    setIsSidebarVisible(window.innerWidth >= 768); // Set sidebar visibility based on window width
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <div className="dashboard-container">
      <NavBar/>
      <div className="dashboard-content">
      {isSidebarVisible && <Sidebar2 />}

        <div className="main-content">
          <div className="header">
            <h1>Past Jobs</h1>
          </div>
          <table className="job-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Job ID</th>
                <th>Job Profile</th>
                <th>Department/School</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>J1234</td>
                <td>Faculty</td>
                <td>SCOPE</td>
                <td>Assistant Professor</td>
                <td>
                  <button className="reuse-btn">REUSE</button>
                  <button className="move-btn">MOVE TO CURRENT</button>
                  <button className="view-btn">VIEW APPLICANTS</button>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>J1234</td>
                <td>JRF</td>
                <td>SCOPE</td>
                <td>Junior Research Fellowship</td>
                <td>
                  <button className="reuse-btn">REUSE</button>
                  <button className="move-btn">MOVE TO CURRENT</button>
                  <button className="view-btn">VIEW APPLICANTS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Past;
