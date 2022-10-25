import React from 'react'
import './about.css'
import {BiTime} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import {BiLibrary} from 'react-icons/bi'
import ME from '../../assets/IMG-20191204-WA0028_3.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className="about_me">
          <div className="about_me-image">
            {/* <img src={ME} alt="My Image About"/> */}
          </div>
        </div>
        <div className="about-content"> 
          <div className="about__cards">
            <article className='about__card'>
              <BiTime className='about_icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about_icon'/>
              <h5>Education</h5>
              <small>Ontario College Advanced Diploma</small><br/>
            </article>
            <article className='about__card'>
              <BiLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3 Projects Completed</small>
            </article>
            </div>
            <p>A Software Development student seeking new experience to magnify my career. 
              Effective and active team player with determination to solve an obstacle. 
              Passionate about new technology to engage my skills with sustainability and environmental innovation.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About