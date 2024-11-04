import Link from "next/link";
import React from "react";
import { sidebarLinks } from "../src/constants";
import '../styles/Dashboard.css';

const Sidebar = () => {
  return (
    <section className="sidebar"  >

      <h2 className="sidebar-header">Hello, Sri Vardhan</h2>
      <p className="sidebar-subtext">Happy to see you here!</p>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
        <Link href="./Dashboard"><li className="dashboard-btn active">Dashboard</li></Link>
          {sidebarLinks.map((item)=>{
            return <Link href={item.route} key={item.lable}><li>{item.label}</li></Link>
          })}
          <li className="empty"></li>
          <Link href="/current-jobs"><li className="jobs">Jobs you applied</li></Link>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
