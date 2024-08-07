import React from 'react'
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NextJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GIT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PowerBI</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
             <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NestJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
