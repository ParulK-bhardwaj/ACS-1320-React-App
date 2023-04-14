import React from 'react';
import './About.css';
import californiaImage from './101-california.jpg';

function About() {
  return (
    <div className='About'>
      <h1>About SFPOPOS</h1>
      <div className='About-content'>
        <div className='About-image'>
          <img src={californiaImage} alt="101 California"/>
        </div>
        <div className='About-copy'>
          <p>POPOS are publicly accessible spaces in
            forms of plazas, terraces, atriums, small 
            parks, and even snippets which are provided
            and maintained by private developers. In San
            Francisco, POPOS mostly appear in the Downtown
            office district area.</p>
        </div>
      </div>
    </div>
  )
}

export default About;