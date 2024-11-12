import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

export default function App() {
  const handleScroll = (e) => {
    const scrollDown = e.deltaY > 0;

    const sections = document.querySelectorAll('section');
    const currentSectionIndex = Array.from(sections).findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom > 0;
    });

    let nextSectionIndex = currentSectionIndex;
    if (scrollDown) {
      nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
      nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    // Scroll to the next or previous section
    sections[nextSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    e.preventDefault(); // Prevent default scroll behavior

    };
  

  return (
    <>
    <main>
      <div id='container' className='container'>
      <Navbar />
      <div id='content' className='content'>
      <section id = 'start' className = 'start'>
      <img className='hello' src='/feathered_ohhello.png' alt='text: Oh, Hello!'></img>
      <aside id= 'photo'>
          <img className='portrait' src='/resumepic.JPG' alt='portrait of Aada'></img>
      </aside>
      </section>
      <section id= 'info' className='info'>
          <h1>Hi, I am Aada. Nice to meet you!</h1>
          <p>I study Information Technology at Tampere University, my major being telecommunications and minor software engineering.
           </p>        
        <p>My interests include cloud engineering, testing software and game development. Gaming is one of my dearest hobbies, and learning to program games myself has been rewarding. 
        Aside from tech, I enjoy hiking and volunteering at a children's church.</p>
        </section>
        <section id='exp'>
          <h1>My work experience</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</p>
        </section>
        
        <aside id='expdiag'>
          <p>Here maybe experience circle diagrams</p>
        </aside>
        <section id= 'work'>
          <h1>Portfolio?</h1>
          <p>Woopswoops</p>
      </section>
      </div>  
      </div>
    </main>
    <footer>
        <p>reach out:</p>
        <p> aada.harma@tuni.fi</p>
        <p>LinkedIn: Aada Härmä</p>
        <a href='https://github.com/aadaharma'>GitHub</a>
    </footer>     
   </>
  );
}
