// components/Dashboard.js
import React from 'react';
import '../styles/Dashboard.css';
import Link from 'next/link';

const Dashboard = () => {
  const jobApplications = [
    { id: 1, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
    { id: 2, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Admin', status: 'SELECTED' },
    { id: 3, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'IN PROGRESS' },
    { id: 4, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
  ];

  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-content">
        <div className="sidebar">
          <h2>Hello, Sri Vardhan</h2>
          <p>Happy to see you here!</p>
          <ul>
          <Link href="./Dashboard"><li className="dashboard-btn active">Dashboard</li></Link>
            <Link href="/Personalform"><li>Personal Information</li></Link>
            <Link href="/education"><li>Education</li></Link>
            <Link href="/experience"><li>Experience</li></Link>
            <Link href="/research"><li>Research</li></Link>
            <Link href="/documents-upload"><li>Documents Upload</li></Link>
            <li className="empty"></li>
            <Link href="/jobs-applied"><li className="jobs">Jobs you applied</li></Link>
          </ul>
        </div>

        <div className="main-content">
          <div className="header">
            <h1>Jobs you have Applied</h1>
          </div>
          <div className="filters">
            <input type="date" className="date-picker" defaultValue="2024-10-04" />
            <select className="filter-dropdown">
              <option value="all">Field Type - All Type</option>
            </select>
          </div>

          <table className="jobs-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Job ID</th>
                <th>Role Name - Dept</th>
                <th>Applied On</th>
                <th>Job Category</th>
                <th>Job Status</th>
              </tr>
            </thead>
            <tbody>
              {jobApplications.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td>
                  <td>{job.jobId}</td>
                  <td>{job.role}</td>
                  <td>{job.date}</td>
                  <td>{job.category}</td>
                  <td>
                    <span className={`status ${job.status.replace(' ', '-').toLowerCase()}`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
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
        <button className='left-btn rnav-button'>Home</button>
        <button className='left-btn rnav-button'>Jobs Applied</button>
        <button className='leftmost-btn rnav-button'>Contact Us</button>
        <button className="nav-button">VITAP Home Page</button>
        <button className="nav-button logout">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
