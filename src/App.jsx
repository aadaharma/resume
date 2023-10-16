import './App.css';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <>
    <main>
      <div id='container' className='container'>
      <Navbar />
      <div id='content' className='content'>
      </div>  
      </div>
    </main>
    <footer>
        <p>reach out: </p>
    </footer>     
   </>
  );
}
