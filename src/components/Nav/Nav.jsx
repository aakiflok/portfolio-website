import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'
const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'  onClick={()=> setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href='#services'  onClick={()=> setActive('#services')} className={active === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact'  onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ''}><RiContactsLine/></a>

    </nav>
  )
}

export default Nav