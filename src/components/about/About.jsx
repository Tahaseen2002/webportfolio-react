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
  <h5>Education</h5>
  <small>B.Tech CSE (IIIT Nuzvid, 2023)</small>
</article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years (Full Stack Development)</small>
            </article>
            <article className='about__card'>
              <HiUsers className='about__icon' />
              <h5>Client</h5>
              <small>Worked with multiple clients</small>
            </article>
            <article className='about__card'>
              <BsFillFolderFill className='about__icon' />
              <h5>Project</h5>
              <small>10+ completed </small>
            </article>
          </div>
          <p> Software Engineer with 2+ years of experience delivering scalable SaaS solutions using 
  React.js, Next.js, NestJS, and MongoDB. Proven expertise in building REST APIs, Gmail-style 
  email clients, secure authentication, and responsive dashboards. Strong background in full-stack 
  development, API integration, and cloud deployments (GCP, Vercel, DigitalOcean). Passionate about 
  building impactful, user-centric products and continuously learning new technologies.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
