import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Link from 'next/link'; // Import Link from next/link
import '../styles/current.css';

const Current = () => {
  const router = useRouter(); // Initialize the router

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
      <NavBar />
      <div className="dashboard-content">
        <div className="sidebar">
          <h2>Hello, Sri Vardhan</h2>
          <p>Happy to see you here!</p>
          <ul>
          <Link href="./General.js"><li className="dashboard-btn active">Post a Job</li></Link>
            <li>Jobs Posted</li>

            <div className="dropdown">
              <button className="dropdown-btn"><Link href="./General"></Link>Jobs Posted</button>
              <div className="dropdown-content">
                <Link href="/current-jobs" className="dropdown-item">Current Jobs</Link>
                <Link href="/past-jobs" className="dropdown-item">Past Jobs</Link>
              </div>
            </div>
          </ul>
        </div>

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

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>VIT-AP University</h2>
      </div>
      <div>
        <Link href="/" className="left-btn rnav-button">Home</Link>
        <Link href="/jobs-applied" className="left-btn rnav-button">Jobs Applied</Link>
        <Link href="/contact-us" className="leftmost-btn rnav-button">Contact Us</Link>
        <Link href="https://vitap.ac.in" className="nav-button">VITAP Home Page</Link>
        <button className="nav-button logout">Logout</button>
      </div>
    </div>
  );
};

export default Current;
