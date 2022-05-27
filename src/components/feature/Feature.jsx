import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
          {text}
      </div>
      <div className='gpt3__features-container__features-button'>
        <button type="button">Learn More</button>
      </div>
    </div>
  )
}

export default Feature