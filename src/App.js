import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './componentes/home';
import StructQuiz from './componentes/structQuiz';
import MatrizQuiz from './componentes/matrizquiz';
import VetorQuiz from './componentes/vetorQuiz';
import FuncaoQuiz from './componentes/funcaoquiz';
import styles from './App.css';

function App() {
  return (

    <div className="app">
      <nav className="navbar">
        <h1 className="title">Quiz de Programação</h1>
        <ul className="navList">
          <li><Link to="/" className="navLink">Início</Link></li>
          <li><Link to="/struct" className="navLink">Struct</Link></li>
          <li><Link to="/matriz" className="navLink">Matriz</Link></li>
          <li><Link to="/vetor" className="navLink">Vetor</Link></li>
          <li><Link to="/funcao" className="navLink">Função</Link></li>
        </ul>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/struct" element={<StructQuiz />} />
          <Route path="/matriz" element={<MatrizQuiz />} />
          <Route path="/vetor" element={<VetorQuiz />} />
          <Route path="/funcao" element={<FuncaoQuiz />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 Quiz de Programação</p>
      </footer>
    </div>
  );
}

export default App;