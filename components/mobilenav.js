'use client';

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiAlignJustify } from "react-icons/fi";
import '../styles/Dashboard.css';

const MobileNav = ({ user }) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]" style={{marginLeft:'90%'}}>
      <Sheet>
        <SheetTrigger>
          <FiAlignJustify className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent side="left" style={{backgroundColor:'white'}} >
        <section className="sidebar"  >

<h2 className="sidebar-header">Hello, Sri Vardhan</h2>
<p className="sidebar-subtext">Happy to see you here!</p>
<nav className="sidebar-nav">
  <ul className="sidebar-list">
  <Link href="./Dashboard"><li className="dashboard-btn active">Dashboard</li></Link>
  <Link href="/Home"><li >Home</li></Link>
  <Link href="/General.js"><li >Apply Jobs</li></Link>
  <Link href="/Home"><li >Home</li></Link>
    {sidebarLinks.map((item)=>{
      return <Link href={item.route} key={item.lable}><li>{item.label}</li></Link>
    })}
    <li className="empty"></li>
    <Link href="/current-jobs"><li className="jobs">Jobs you applied</li></Link>
    <Link href="./"><li className="dashboard-btn active">Logout</li></Link>
  </ul>
</nav>
</section>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
