import React from 'react';
import './header.css';
import visitor from '../../assets/visitor.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Community is everything</h1>
        <h2>hub³ is a web³ <del>agency</del>, <del>platform</del>, community like no other.</h2>
        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
      </div>
      <div className='gpt3__header-image'>
        <img src={visitor} alt="visitor" />
        <img src={visitor} alt="visitor" />
        <img src={visitor} alt="visitor" />
        <img src={visitor} alt="visitor" />
        <img src={visitor} alt="visitor" />
        <img src={visitor} alt="visitor" />
      </div>
    </div>
  )
}

export default Header