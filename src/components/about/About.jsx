import React from 'react'
import './about.css'
import ME from '../../assests/passphoto.jpg'
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFillFolderFill } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt=""/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year Working</small>
            </article>
            <article className='about__card'>
              <HiUsers className='about__icon' />
              <h5>Client</h5>
              <small>one client</small>
            </article>
            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Project</h5>
              <small>2+completed</small>
            </article>
          </div>
          <p>Completed my graduation from IIIT Nuzivid in CSE (2023).Did internship in frontend technologies like html,css,Javascript and Reactjs have
            experience working with API's, can handle version control Git. Have 1 year experience, working as a full-time full stack developer 
            handled projects and have ability to learn new technologies and improve my skills.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
