import React from 'react';
import QuizCard from './QuizCard';

const perguntas = [
  {
    pergunta: "Como se declara uma matriz 3x4 de números reais (float) em C?",
    opcoes: [
      "float matriz[3][4];",
      "matrix<float> matriz(3,4);",
      "float[3,4] matriz;",
      "float matriz = new float[3][4];"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o número total de elementos em uma matriz declarada como int m[5][6];?",
    opcoes: [
      "11",
      "30",
      "24",
      "56"
    ],
    correta: 1
  },
  {
    pergunta: "Em uma matriz bidimensional em C, como os elementos são armazenados na memória?",
    opcoes: [
      "Em ordem aleatória",
      "Coluna por coluna (column-major)",
      "Linha por linha (row-major)",
      "Como uma árvore binária"
    ],
    correta: 2
  },
  {
    pergunta: "Qual trecho inicializa corretamente todos os elementos de uma matriz 2x2 com zero?",
    opcoes: [
      "int m[2][2] = {0};",
      "int m[2][2]; m = 0;",
      "int m[2][2] = {{}};",
      "int m[2][2]();"
    ],
    correta: 0
  },
  {
    pergunta: "O que acontece se você acessar m[3][4] em uma matriz declarada como int m[3][4];?",
    opcoes: [
      "O programa imprime um aviso, mas continua",
      "O compilador gera um erro de sintaxe",
      "Acesso a memória fora dos limites (comportamento indefinido)",
      "O elemento é automaticamente criado"
    ],
    correta: 2
  }
];

export default function MatrizQuiz() {
  return (
    <div>
      <h2>Quiz: Matriz</h2>
      {perguntas.map((q, i) => (
        <QuizCard key={i} pergunta={q.pergunta} opcoes={q.opcoes} correta={q.correta} />
      ))}
    </div>
  );
}