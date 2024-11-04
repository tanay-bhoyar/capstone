import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import MobileNav from './mobilenav';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the window is in mobile view
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobileView(); // Check on initial render
    window.addEventListener('resize', checkMobileView); // Add event listener on resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>VIT-AP University</h2>
      </div>
      {!isMobile ? (
        <div>
          <button className="left-btn rnav-button">Home</button>
          <button className="left-btn rnav-button">Jobs Applied</button>
          <button className="leftmost-btn rnav-button">Contact Us</button>
          <button className="nav-button">VITAP Home Page</button>
          <button className="nav-button logout">Logout</button>
        </div>
      ) : (
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <MobileNav />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
