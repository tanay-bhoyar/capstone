import { useState } from 'react';
import NavBar from '../components/NavBar';
import '../styles/General2.css'; // Make sure to adjust the path according to your folder structure

const General2 = () => {
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
        <div className="sidebar">
          <h2>Hello, Sri Vardhan</h2>
          <p>Happy to see you here!</p>
          <ul>
            <li className="dashboard-btn active">Post a Job</li>
            <li>Jobs Posted</li>
            <div className="dropdown">
              <button className="dropdown-btn">Jobs Posted</button>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Current Jobs</a>
                <a href="#" className="dropdown-item">Past Jobs</a>
              </div>
            </div>
          </ul>
        </div>

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
