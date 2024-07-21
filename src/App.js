import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componats/Home.js';
import Allnews from './Componats/Allnews.js';
import Navigation from './Componats/Navigation.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/us" element={<Allnews value="us" />} />
        </Routes>
        <Routes>
        <Route path="/india"  element={<Allnews value="in" />}  />
        </Routes>
        <Routes>
        <Route path="/Apple-news"  element={<Allnews value="Apple-news" />}  />
        </Routes>
         <Routes>
        <Route path="/BBC-news"  element={<Allnews value="BBC-news" />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
