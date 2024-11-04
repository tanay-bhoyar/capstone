import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Link from 'next/link'; // Import Link from next/link
import '../styles/current.css';

const Sidebar2 = () => {
  return (
      <div className="sidebar">
          <h2>Hello, Sri Vardhan</h2>
          <p>Happy to see you here!</p>
          <ul>
          <Link href="./General.js"><li className="dashboard-btn active">Post a Job</li></Link>
            <li>Jobs Posted</li>

            <div className="dropdown">
              <button className="dropdown-btn"><Link href="./General"></Link>Jobs Posted</button>
              <div className="dropdown-content">
                <Link href="/current-jobs" className="dropdown-item">Current Jobs</Link>
                <Link href="/past-jobs" className="dropdown-item">Past Jobs</Link>
              </div>
            </div>
          </ul>
        </div>
  )
}

export default Sidebar2;
