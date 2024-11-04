// pages/resume.js
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import '../styles/Resume.css'; // Adjust the path as necessary
import Sidebar from '../components/sidebar';
import NavBar from '../components/NavBar';

const Resume = () => {
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
    resume: null,
    transcript: null,
    experienceCertificates: null,
    appliedBefore: '',
    previousAttendanceDate: '',
    declarationConfirmed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, declarationConfirmed: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
    // Add logic to handle form submission (e.g., upload files)
  };

  return (
    <div className="dashboard-container">
      <NavBar></NavBar>
      <div className="dashboard-content">
      {isSidebarVisible && <Sidebar />}

        <div className="main-content">
          <div className="form-container">
            <h2>Resume</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="resume">Upload your Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="transcript">Upload your Transcript</label>
                <h4>(merge all transcripts into a single pdf file and upload)</h4>
                <input
                  type="file"
                  id="transcript"
                  name="transcript"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experienceCertificates">Upload all your experience Certificates*</label>
                <h4>(merge all experience Certificates into a single pdf file and upload)</h4>
                <input
                  type="file"
                  id="experienceCertificates"
                  name="experienceCertificates"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="appliedBefore">Whether you have applied/attended previously in VIT-AP*</label>
                <input
                  type="text"
                  id="appliedBefore"
                  name="appliedBefore"
                  value={formData.appliedBefore}
                  onChange={handleInputChange}
                  placeholder="YES or NO"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="previousAttendanceDate">If yes, date of attended to the Technical round.</label>
                <input
                  type="date"
                  id="previousAttendanceDate"
                  name="previousAttendanceDate"
                  value={formData.previousAttendanceDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <h2>Declaration</h2>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declarationConfirmed"
                  checked={formData.declarationConfirmed}
                  onChange={handleCheckboxChange}
                  required
                />
                <label htmlFor="declaration" className="deck"> I confirm that I have not been convicted by a court in India for any criminal offense and/or sentenced to imprisonment. These are no criminal proceedings pending against me before any court in India. I have not been issued a warrant or summons for appearance or a warrant for arrest by any court in India. I certify that the above statements made by me are true, complete and correct. I agree that in case VIT at any time that the information given by me in this form is not correct or incomplete, VIT will have the right to withdraw my letter of appointment or to terminate my appointment at any time without notice or compensation.</label>
              </div>

              <div className="form-actions">
                <Link href="/previous-page"><button type='button' className='jobs back'>Back</button></Link>
                <button type="submit" className="submit-button dashboard-btn active">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Resume;
