// pages/education.js
import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar'; // Assuming you have a NavBar component in a components folder
import '../styles/education.css';
import Link from 'next/link'; 
import Sidebar from '../components/sidebar';

const Education = () => {
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
    tenthSchool: '',
    tenthBoard: '',
    tenthYear: '',
    tenthPercentage: '',
    higherSecondarySchool: '',
    higherSecondaryBoard: '',
    higherSecondaryYear: '',
    higherSecondaryPercentage: '',
    // Add any additional fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-content">
      {isSidebarVisible && <Sidebar />} 

        <div className="main-content">
          <div className="header">
            <h1>Personal Information</h1>
          </div>
          <div className="form-container">
            <h2>Education Details - 10th Standard</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="tenthSchool">Name of the School/Institute*</label>
                <input
                  type="text"
                  id="tenthSchool"
                  name="tenthSchool"
                  value={formData.tenthSchool}
                  onChange={handleInputChange}
                  placeholder="Enter Your School Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tenthBoard">Name of the Board*</label>
                <input
                  type="text"
                  id="tenthBoard"
                  name="tenthBoard"
                  value={formData.tenthBoard}
                  onChange={handleInputChange}
                  placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tenthYear">Year of Completion*</label>
                <input
                  type="month"
                  id="tenthYear"
                  name="tenthYear"
                  value={formData.tenthYear}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tenthPercentage">Percentage or CGPA Obtained*</label>
                <input
                  type="number"
                  id="tenthPercentage"
                  name="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={handleInputChange}
                  placeholder="Enter The Number you Obtained"
                  required
                />
              </div>

              {/* Repeat similar blocks for Higher Secondary, Undergraduate, etc. */}
              <h2>Education Details - Higher Secondary/Intermediate</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the School/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your School Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Board*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
          <input
            type="number"
            id="higherSecondaryPercentage"
            name="higherSecondaryPercentage"
            value={formData.higherSecondaryPercentage}
            onChange={handleInputChange}
            placeholder="Enter The Number you Obtained"
            required
          />
        </div>


        <h2>Education Details-Under Graduation</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
          <input
            type="number"
            id="higherSecondaryPercentage"
            name="higherSecondaryPercentage"
            value={formData.higherSecondaryPercentage}
            onChange={handleInputChange}
            placeholder="Enter The Number you Obtained"
            required
          />
        </div>

        <h2>Education Details-Post Graduation</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
          <input
            type="number"
            id="higherSecondaryPercentage"
            name="higherSecondaryPercentage"
            value={formData.higherSecondaryPercentage}
            onChange={handleInputChange}
            placeholder="Enter The Number you Obtained"
            required
          />
        </div>     

        <h2>Education Details-Phd</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>             

        <h2>Education Details-PDF</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Discipline*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Major Type[Example Computer Science]"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">PDF Status*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Select Status Type"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

              <div className="form-actions">
              <button type="button" className='jobs back'>Back</button>
              <button type="submit" className="submit-button dashboard-btn active">next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
