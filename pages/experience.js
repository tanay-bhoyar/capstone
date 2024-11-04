// pages/experience.js
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import "../styles/experience.css"; // Adjust this path as necessary
import Sidebar from '../components/sidebar';
import NavBar from '../components/NavBar';

const ExperienceForm = () => {
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
  const [formData, setFormData] = useState({
    totalExperience: '',
    phdExperience: '',
    industryExperience: '',
    currentOrganization: '',
    currentDesignation: '',
    servedInVIT: 'NA',
    presentSalary: '',
    expectedSalary: '',
    joinOffer: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form validation and submission logic here
    console.log(formData);
  };

  return (
    <div className="dashboard-container">
      <NavBar></NavBar>
      <div className="dashboard-content">
      {isSidebarVisible && <Sidebar />} 

        <div className="main-content">
          <h2>Professional Experience Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Total Experience (in years)*</label>
              <input
                type="number"
                name="totalExperience"
                placeholder="Enter Your Experience in Number"
                value={formData.totalExperience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Experience after Ph.D. (in years)</label>
              <input
                type="number"
                name="phdExperience"
                placeholder="Enter Your Experience in Number"
                value={formData.phdExperience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Industry Experience (in years)*</label>
              <input
                type="number"
                name="industryExperience"
                placeholder="Enter Your Experience in Number"
                value={formData.industryExperience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Current Institute/Organization</label>
              <input
                type="text"
                name="currentOrganization"
                placeholder="Enter The Name of Organization"
                value={formData.currentOrganization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Current Designation</label>
              <input
                type="text"
                name="currentDesignation"
                placeholder="Enter your Present Role"
                value={formData.currentDesignation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Have you served in VIT before?</label>
              <select
                name="servedInVIT"
                value={formData.servedInVIT}
                onChange={handleChange}
              >
                <option value="NA">NA</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>Present Salary (Per month in INR)</label>
              <input
                type="number"
                name="presentSalary"
                placeholder="Enter Your Salary in Number (Ex: 120000)"
                value={formData.presentSalary}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Expected Salary (Per month in INR)</label>
              <input
                type="number"
                name="expectedSalary"
                placeholder="Enter Your Salary in Number (Ex: 1200000)"
                value={formData.expectedSalary}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>When can you join if you are given an offer?</label>
              <select
                name="joinOffer"
                value={formData.joinOffer}
                onChange={handleChange}
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <Link href="/previous-page"><button type='button' className='jobs back'>Back</button></Link>
            <button type="submit" className="submit-button dashboard-btn active">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ExperienceForm;
