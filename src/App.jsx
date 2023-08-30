import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactInfo from './pages/ContactInfo';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/:id" element={<ContactInfo/>} />
    </Routes>
  )
}


