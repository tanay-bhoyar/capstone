import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import '../styles/past.css';

const Past = () => {
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
              <button className="dropdown-btn">Jobs Posted</button>
              <div className="dropdown-content">
                <Link href="/current-jobs" className="dropdown-item">
                  Current Jobs
                </Link>
                <Link href="/past-jobs" className="dropdown-item">
                  Past Jobs
                </Link>
              </div>
            </div>
          </ul>
        </div>

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

export default Past;
