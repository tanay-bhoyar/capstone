import '../styles/General2.css'; // Make sure the CSS path is correct

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>VIT-AP University</h2>
      </div>
      <div>
        <button className="left-btn rnav-button">Home</button>
        <button className="left-btn rnav-button">Jobs Applied</button>
        <button className="leftmost-btn rnav-button">Contact Us</button>
        <button className="nav-button">VITAP Home Page</button>
        <button className="nav-button logout">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
