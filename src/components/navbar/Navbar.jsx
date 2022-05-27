import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Projects</a></p>
  <p><a href="#wgpt3">Products</a></p>
  <p><a href="#possibility">About Us</a></p>
  <p><a href="#features">Support</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <div className='gpt3__navbar-sign-socials'>
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
        <button type="button">CONNECT</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='spt3__navbar-menu_container-links'>
              <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                <div className='gpt3__navbar-sign-socials'>
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
                  <button type="button">CONNECT</button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar