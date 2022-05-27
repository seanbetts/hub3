import React from 'react';
import './header.css';
import visitor from '../../assets/visitor.png';
import darcel from '../../assets/darcel.png';
import burb from '../../assets/burb.png';
import lizard from '../../assets/lizard.png';
import shroom from '../../assets/shroom.png';
import deadfella from '../../assets/deadfella.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="projects">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Community is everything</h1>
        <h2>hub³ is a web³ <del>agency</del>, <del>platform</del>, community like no other.</h2>
        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
      </div>
      <div className='gpt3__header-image'>
        <img src={visitor} alt="visitor" />
        <img src={darcel} alt="darcel" />
        <img src={burb} alt="burb" />
        <img src={lizard} alt="lizard" />
        <img src={shroom} alt="shroom" />
        <img src={deadfella} alt="deadfella" />
      </div>
    </div>
  )
}

export default Header