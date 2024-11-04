import { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../styles/General2.css'; // Make sure to adjust the path according to your folder structure
import Sidebar2 from '../components/sidebar2';

const General2 = () => {
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
    Category: '',
    Role: '',
    Project: '',
    Qualification: '',
    Stipend: '',
    Tenure: '',
    Support: '',
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
      {isSidebarVisible && <Sidebar2></Sidebar2>}

        <div className="main-content">
          <div className="header">
            <h1>General Information</h1>
          </div>
          <div className="form-container">
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="form-group">
                <label htmlFor="Category">Category*</label>
                <input
                  type="text"
                  id="Category"
                  name="Category"
                  value={formData.Category}
                  onChange={handleInputChange}
                  placeholder=""
                  required
                />
              </div>

              <div className="form-group">
          <label htmlFor="Role">Role*</label>
          <input
            type="text"
            id="Role"
            name="Role"
            value={formData.Role}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tenthSchool">Project Title*</label>
          <input
            type="text"
            id="tenthSchool"
            name="tenthSchool"
            value={formData.tenthSchool}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Project">Qualification*</label>
          <input
            type="text"
            id="Project"
            name="Project"
            value={formData.Project}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Stipend">Stipend*</label>
          <input
            type="text"
            id="Stipend"
            name="Stipend"
            value={formData.Stipend}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Tenure">Tenure*</label>
          <input
            type="number"
            id="Tenure"
            name="Tenure"
            value={formData.Tenure}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Support">Support Documentation*</label>
          <input
            type="file"
            id="Support"
            name="Support"
            value={formData.Support}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
              <div className="form-actions">
                <button type="button" className="jobs back">Cancel</button>
                <button type="submit" className="submit-button dashboard-btn active">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General2;
