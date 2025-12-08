import React from 'react';
import QuizCard from './QuizCard';

const perguntas = [
  {
    pergunta: "O que é uma 'struct' em C?",
    opcoes: [
      "Um tipo de dado primitivo",
      "Uma coleção de variáveis de tipos diferentes agrupadas",
      "Uma função especial",
      "Um ponteiro para memória"
    ],
    correta: 1
  },
  {
    pergunta: "Como se acessa um campo 'idade' de uma struct chamada 'pessoa'?",
    opcoes: [
      "pessoa.idade",
      "pessoa[idade]",
      "idade.pessoa",
      "&pessoa.idade"
    ],
    correta: 0
  }
];

export default function StructQuiz() {
  return (
    <div>
      <h2>Quiz: Struct</h2>
      {perguntas.map((q, i) => (
        <QuizCard key={i} pergunta={q.pergunta} opcoes={q.opcoes} correta={q.correta} />
      ))}
    </div>
  )
}