import React from 'react'
import './feature.css';

const feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature' id='features'>
      <div className='gpt3__features-container__feature-title'>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>

    </div>
  )
}

export default feature