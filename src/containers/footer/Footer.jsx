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
            <a href="https://vibeIntel.hub-3.xyz">
            <p>vibeIntel</p>
            </a>
            <a href="https://vibeAlerts.hub-3.xyz">
            <p>vibeAlerts</p>
            </a>
            <a href="https://vibeWars.hub-3.xyz">
            <p>vibeWars</p>
            </a>
            <a href="https://vibeDAO.hub-3.xyz">
            <p>vibeDAO</p>
            </a>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Support</h4>
            <a href="https://www.hub-3.xyz/knowledge-base">
            <p>Knowledge Base</p>
            </a>
            <a href="https://www.hub-3.xyz/community">
            <p>Community</p>
            </a>
            <a href="https://www.hub-3.xyz/contact-us">
            <p>Contact Us</p>
            </a>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <a href="https://www.hub-3.xyz/about-us">
            <p>About Us</p>
            </a>
            <a href="https://www.hub-3.xyz/products">
            <p>Products</p>
            </a>
            <a href="https://www.hub-3.xyz/services">
            <p>Services</p>
            </a>
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