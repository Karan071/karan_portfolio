import React from 'react'
import './about.css';
import Me from '../../assets/Karan Gif.gif';
import {FaAward} from 'react-icons/fa';
import {BiUserPlus} from 'react-icons/bi';
import {AiOutlineProject} from 'react-icons/ai';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about-me" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              < FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months+ working</small>
              <br></br>
              <small>experience</small>
            </article>

            <article className="about__card">
              < BiUserPlus className='about__icon'/>
              <h5>Clients</h5>
              <small> Not worked with any</small>
            </article>

            <article className="about__card">
              < AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ projects</small>
              <br></br>
              <small>experience</small>
            </article>
          </div>
          <p>
          Enthusiastic engineering graduate with basic knowledge in coding and design.Ability to learn new software and technologies quickly. Capability to work in teams.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's connect</a>
        </div>
      </div>

    </section>
  )
}

export default About;