import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./componentes/home";
import StructQuiz from "./componentes/structQuiz";
import MatrizQuiz from "./componentes/matrizquiz";
import VetorQuiz from "./componentes/vetorQuiz";
import FuncaoQuiz from "./componentes/funcaoquiz";
import styles from "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <nav className="navbar">
          <div>
            <img
              src="https://em-content.zobj.net/source/apple/354/books_1f4da.png"
              width={45}
            ></img>
            <h1 className="title">quiz de programação</h1>
          </div>
          <ul className="navList">
            <li>
              <Link to="/" className="navLink">
                início
              </Link>
            </li>
            <li>
              <Link to="/struct" className="navLink">
                struct
              </Link>
            </li>
            <li>
              <Link to="/matriz" className="navLink">
                matriz
              </Link>
            </li>
            <li>
              <Link to="/vetor" className="navLink">
                vetor
              </Link>
            </li>
            <li>
              <Link to="/funcao" className="navLink">
                função
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/struct" element={<StructQuiz />} />
          <Route path="/matriz" element={<MatrizQuiz />} />
          <Route path="/vetor" element={<VetorQuiz />} />
          <Route path="/funcao" element={<FuncaoQuiz />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 quiz de programação</p>
      </footer>
    </>
  );
}

export default App;
