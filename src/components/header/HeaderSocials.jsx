import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tahaseen-shaik-2ta2" ><FaLinkedin/></a>
        <a href="https://github.com/Tahaseen2002?tab=repositories" ><BsGithub/></a>
        
    </div>
  )
}

export default HeaderSocials