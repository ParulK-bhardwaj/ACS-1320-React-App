import React from 'react';
import './About.css';
import californiaImage from './101-california.jpg';

function About() {
  return (
    <article className='About'>
      <h1>About SFPOPOS</h1>
      <div className='About-content'>
        <figure className='About-image'>
          <img src={californiaImage} alt="101 California"/>
          <figcaption>101 California</figcaption>
        </figure>
        <section className='About-copy'>
          <p>POPOS are publicly accessible spaces in
            forms of plazas, terraces, atriums, small 
            parks, and even snippets which are provided
            and maintained by private developers. In San
            Francisco, POPOS mostly appear in the Downtown
            office district area.</p>
        </section>
      </div>
    </article>
  )
}

export default About;