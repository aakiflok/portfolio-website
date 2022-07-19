import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/IMG-20191204-WA0028_3.jpg'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Aakif Lokhandwala</h1>
        <h5 className='text-light'> Software Devveloper Student</h5>
        
        <CTA />

        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="ME" /> 
        </div>

          <a href='#contact' className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header