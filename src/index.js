import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>,
  document.querySelector('#root')
)