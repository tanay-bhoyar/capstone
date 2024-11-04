// components/PersonalInfoForm.js
import React, { useState,useEffect } from 'react';
import '../styles/PersonalInfoForm.css';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import MobileNav from '../components/mobilenav';
import { FiAlignJustify } from "react-icons/fi";
import "../styles/index.css";


const PersonalInfoForm = () => {

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
    salutation: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    nationality: '',
    postalAddress: '',
    country: '',
    state: '',
    city: '',
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
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
              {[
                { label: 'Salutation*', name: 'salutation' },
                { label: 'Name as per Aadhar card*', name: 'name' },
                { label: 'Email ID*', name: 'email' },
                { label: 'Phone Number*', name: 'phone' },
                { label: 'Gender*', name: 'gender' },
                { label: 'Nationality*', name: 'nationality' },
                { label: 'Postal Address*', name: 'postalAddress' },
                { label: 'Country*', name: 'country' },
                { label: 'State*', name: 'state' },
                { label: 'City*', name: 'city' },
              ].map((field) => (
                <div className="form-group" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
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

export default PersonalInfoForm;
