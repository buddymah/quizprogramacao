import React from "react";
import QuizCard from "./QuizCard";

const perguntas = [
  {
    pergunta: "O que é uma 'struct' em C?",
    opcoes: [
      "Um tipo de dado primitivo",
      "Uma coleção de variáveis de tipos diferentes agrupadas",
      "Uma função especial",
      "Um ponteiro para memória",
    ],
    correta: 1,
  },
  {
    pergunta: "Como se acessa um campo 'idade' de uma struct chamada 'pessoa'?",
    opcoes: ["pessoa.idade", "pessoa[idade]", "idade.pessoa", "&pessoa.idade"],
    correta: 0,
  },
];

export default function StructQuiz() {
  return (
    <div className="container">
      <div className="main">
        <img
          src="https://em-content.zobj.net/source/apple/271/card-file-box_1f5c3-fe0f.png"
          width={30}
          className="image"
        />

        <h2>quiz struct</h2>
        <a>(estruturas em C/C++)</a>

        {perguntas.map((q, i) => (
          <QuizCard
            key={i}
            numero={i + 1}
            pergunta={q.pergunta}
            opcoes={q.opcoes}
            correta={q.correta}
          />
        ))}
      </div>
    </div>
  );
}
