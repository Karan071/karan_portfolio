import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaArtstation} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__social">
        <a href="www.linkedin.com/in/karan-chourasia" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Karan071" target='_blank'>< BsGithub /></a>
        <a href="https://www.artstation.com/warmachine07" target='_blank'><FaArtstation/></a>
    </div>
  )
}

export default HeaderSocials;