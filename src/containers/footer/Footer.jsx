import React from 'react';
import logo from '../../assets/logo.svg';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__footer-links-menu'>
          <div className='gpt3__footer-links_div'>
            <h4>Products</h4>
            <p>vibeIntel</p>
            <p>vibeAlerts</p>
            <p>vibeWars</p>
            <p>vibeDAO</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Support</h4>
            <p>Knowledge Base</p>
            <p>Community</p>
            <p>Contact Us</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
        </div>
        <hr className="gpt3__footer-solidbar" />
        <div className='gpt3__footer-belowbar'>
        <div className='gpt3__footer-copyright'>
          <p>© hub³ 2022</p>
        </div>
        <div className='gpt3__footer-socials'>
          <h4>Follow us:</h4>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="discord" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer