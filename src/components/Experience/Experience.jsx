import React from 'react'
import './experience.css'
import {RiSendPlaneLine} from 'react-icons/ri'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Developmet</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name1</h4>
              <small className='text-light'>Experienced</small></div>

            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name2</h4>
              <small className='text-light'>Intermediate</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name3</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name4</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name5</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>

          </div>
          </div>
          <div className="experience__backend">
          <h3>Backend Developmet</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name1</h4>
              <small className='text-light'>Experienced</small></div>

            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name2</h4>
              <small className='text-light'>Intermediate</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name3</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name4</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            <article className='experience__details'>
              <RiSendPlaneLine />
              <div><h4>Lng Name5</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>

          </div>
          </div>
        


      </div>
    </section>
  )
}
export default Experience