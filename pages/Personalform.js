// components/PersonalInfoForm.js
import React, { useState } from 'react';
import '../styles/PersonalInfoForm.css';
import NavBar from '../components/NavBar';
import Link from 'next/link';


const PersonalInfoForm = () => {
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
