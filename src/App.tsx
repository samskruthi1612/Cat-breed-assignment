import React from 'react';
import './App.css';
import NavBar from './components/NavBar.tsx'; 
import CatBreed from './components/CatBreed.tsx';
import About from './components/About.tsx';
import GoodBye from './components/GoodBye.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatBreed />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/goodbye" element={<GoodBye />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
