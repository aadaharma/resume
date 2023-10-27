import './App.css';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <>
    <main>
      <div id='container' className='container'>
      <Navbar />
      <div id='content' className='content'>
      <section id= 'info' className='info'>
          <h1>Hi, I am Aada. Nice to meet you!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <p>reach out: </p>
    </footer>     
   </>
  );
}
