import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="main">
        <img
          src="https://em-content.zobj.net/source/apple/96/personal-computer_1f4bb.png"
          width={30}
          className="image"
        />

        <h2>bem-vindo ao quiz de programação!</h2>
        <p>escolha um dos tópicos abaixo para testar seus conhecimentos:</p>

        <div className="card-main">
          <Link to="/struct" className="card">
            <img
              src="https://em-content.zobj.net/source/apple/271/card-file-box_1f5c3-fe0f.png"
              width={30}
            />

            <p>Struct</p>
            <a>(estruturas em C/C++)</a>
          </Link>

          <Link to="/matriz" className="card">
            <img
              src="https://em-content.zobj.net/source/apple/114/input-symbol-for-numbers_1f522.png"
              width={30}
            />
            <p>Matriz</p>
            <a>(arrays bidimensionais)</a>
          </Link>
          <Link to="/vetor" className="card">
            <img
              src="https://em-content.zobj.net/source/apple/76/input-symbol-for-latin-letters_1f524.png"
              width={30}
            />
            <p>Vetor</p>
            <a>(arrays unidimensionais)</a>
          </Link>
          <Link to="/funcao" className="card">
            <img
              src="https://emojigraph.org/media/apple/gear_2699-fe0f.png"
              width={30}
            />
            <p>Função</p>
            <a>(sub-rotinas e reutilização de código)</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
