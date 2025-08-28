import React from 'react'
import CV from '../../assests/tahaseen_Resume__2YOE_.pdf';
const Links = () => {
  return (
    <div className="Links">
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Links
