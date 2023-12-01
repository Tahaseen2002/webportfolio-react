import React from 'react'
import './nav.css';
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi";
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="/#" className={activeNav === "#" ? 'active' : ''}><IoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''} ><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? 'active' : ''} ><MdOutlineMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''} ><BiSolidContact /></a>
    </nav>
  )
}

export default Nav