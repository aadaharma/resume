import './App.css';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <>
    <main>
      <div id='container' className='container'>
      <Navbar />
      <div id='content' className='content'>
      <section id = 'start' className = 'start'>
      <img className='hello' src='/ohhello.PNG' alt='text: Oh, Hello!'></img>
      </section>
      <section id= 'info' className='info'>
          <h1>Hi, I am Aada. Nice to meet you!</h1>
          <p>I study Information Technology at Tampere University, and am passionate about all things engineering and literature. 
        After finishing upper secondary school I took some introductory engineering courses at open university - one of them happened to be Programming 1. 
        I was immediately captivated. A second programming course solidified my decision to apply to study Information Technology. </p>
        
        <p>My interests include cloud engineering, testing software and game development. Gaming is one of my dearest hobbies, and learning to program games myself has been rewarding. 
        Aside from tech, I enjoy hiking and volunteering at a children's church.</p>
        </section>
        <section id='exp'>
          <h1>My work experience</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</p>
        </section>
        <aside id= 'photo'>
          <img className='portrait' src='/resumepic.JPG' alt='portrait of Aada'></img>
        </aside>
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
