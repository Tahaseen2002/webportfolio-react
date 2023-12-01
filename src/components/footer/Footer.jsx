import React from 'react'
import './footer.css';
import { FaLinkedinIn,  FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Tahaseen</a>
      <u1 className='permalinks'>
        <li><a href="/#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </u1>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tahaseen-shaik-2ta2/">< FaLinkedinIn /></a>
        <a href="https://www.facebook.com/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/"><LuInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Tahaseen.All rights reserverd</small>
      </div>
    </footer>
  )
}
export default Footer;