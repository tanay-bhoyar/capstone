// pages/research.js
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import '../styles/research.css'; // Adjust the path as necessary
import Sidebar from '../components/sidebar';
import NavBar from '../components/NavBar';

const Research = () => {
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
    scopusIndexedPublished: '',
    nonScopusIndexedPublished: '',
    scopusIndexedJournals: '',
    sciIndexedJournals: '',
    otherJournals: '',
    googleScholarLink: '',
    scopusAuthorID: '',
    patentTitle: '',
    patentID: '',
    countryIssued: '',
    patentStatus: '',
    projectName: '',
    fundingAgents: '',
    sanctionAmount: '',
    projectDurationFrom: '',
    projectDurationTo: '',
    projectStatus: '',
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
      <NavBar/>
      <div className="dashboard-content">
      {isSidebarVisible && <Sidebar />} 

        <div className="main-content">
          <div className="form-container">
            <h2>Research</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>International Conference published*</label>
                <label>Scopus Indexed*</label>
                <input
                  type="number"
                  name="scopusIndexedPublished"
                  value={formData.scopusIndexedPublished}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Non-Scopus Indexed*</label>
                <input
                  type="number"
                  name="nonScopusIndexedPublished"
                  value={formData.nonScopusIndexedPublished}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>International Journals Published</label>
                <label>Scopus Indexed*</label>
                <input
                  type="number"
                  name="scopusIndexedJournals"
                  value={formData.scopusIndexedJournals}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>SCI Indexed*</label>
                <input
                  type="number"
                  name="sciIndexedJournals"
                  value={formData.sciIndexedJournals}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Others*</label>
                <input
                  type="number"
                  name="otherJournals"
                  value={formData.otherJournals}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Google Scholar Link*</label>
                <input
                  type="text"
                  name="googleScholarLink"
                  value={formData.googleScholarLink}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Scopus Author ID*</label>
                <input
                  type="text"
                  name="scopusAuthorID"
                  value={formData.scopusAuthorID}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <h2>Patents</h2>
              <div className="form-group">
                <label>Title of the Patents*</label>
                <input
                  type="text"
                  name="patentTitle"
                  value={formData.patentTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Patent ID*</label>
                <input
                  type="text"
                  name="patentID"
                  value={formData.patentID}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Country Issued*</label>
                <input
                  type="text"
                  name="countryIssued"
                  value={formData.countryIssued}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  name="patentStatus"
                  value={formData.patentStatus}
                  onChange={handleInputChange}
                />
              </div>

              <h2>Projects</h2>
              <div className="form-group">
                <label>Name of Project</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Name of Funding Agents</label>
                <input
                  type="text"
                  name="fundingAgents"
                  value={formData.fundingAgents}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Sanction Amount</label>
                <input
                  type="text"
                  name="sanctionAmount"
                  value={formData.sanctionAmount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Project Duration</label>
                <label>From</label>
                <input
                  type="date"
                  name="projectDurationFrom"
                  value={formData.projectDurationFrom}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>To</label>
                <input
                  type="date"
                  name="projectDurationTo"
                  value={formData.projectDurationTo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  name="projectStatus"
                  value={formData.projectStatus}
                  onChange={handleInputChange}
                />
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


export default Research;
