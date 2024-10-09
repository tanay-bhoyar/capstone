// pages/experience.js
import React, { useState } from 'react';
import Link from 'next/link';
import "../styles/experience.css"; // Adjust this path as necessary

const ExperienceForm = () => {
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

export default ExperienceForm;
