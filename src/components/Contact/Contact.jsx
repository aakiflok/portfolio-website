import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_a6c5uuv', 'template_9zcsrac', form.current, 'iEL-xBo10GADjTUnV')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">          
          <AiOutlineMail className='contact__option-icon'/>         
          <h4>Email</h4>
          <h5>aakiflok52.al@gmail.com</h5>
          <a href="mailto:aakiflok52.al@gmail.com" target="_blank"> Send a Message</a>
          </article>

          <article className="contact__option">          
          <AiOutlineLinkedin className='contact__option-icon'/>         
          <h4>Linkedin</h4>
          <h5>@Aakif Lokhandwala</h5>
          <a href="https://www.linkedin.com/in/aakif-lokhandwala-01ba4b198/" target="_blank"> Send a Message</a>
          </article>
          <article className="contact__option">          
          <AiOutlineWhatsApp className='contact__option-icon'/>         
          <h4>What's App</h4>
          <h5>@+16475076722</h5>
          <a href="https://api.whatsapp.com/send?phone=16475076722" target="_blank"> Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact