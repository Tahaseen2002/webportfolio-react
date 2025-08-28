import React from 'react'
import './header.css';
import Links from './Links';
import Me from '../../assests/me.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tahaseen Shaik</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <Links />
        <HeaderSocials />
        <div className="me">
        <img src={Me} alt=""/>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header
