import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import { FiAlignJustify } from "react-icons/fi";
import NavBar from '../components/NavBar';

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to handle resize
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const jobApplications = [
    { id: 1, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
    { id: 2, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Admin', status: 'SELECTED' },
    { id: 3, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'IN PROGRESS' },
    { id: 4, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
  ];

  return (
    <div className="dashboard-container">
      <NavBar></NavBar>
      <div className="dashboard-content">
        {isSidebarVisible && <Sidebar />} {/* Conditionally render sidebar */}

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


export default Dashboard;
