import React from 'react'
import './footer.css'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aakif</a>

      <ul className='permalinks'>
        <li ><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Expeirience">Expeirience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><AiFillLinkedin/></a>
        <a href="https://github.com"><AiFillGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aakif Lokhandwala</small>
      </div>
    </footer>
  )
}

export default Footer