import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='gpt3__contact section__margin' id='contact'>
      <div className='gpt3__contact-heading'>
        <h1 className='gradient-text'>Contact us today to find out how we can help build your community</h1>
      </div>
      <div className='gpt3__contact-input'>
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Contact Us</button>
      </div>
    </div>
  )
}

export default Contact