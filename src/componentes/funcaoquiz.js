import React from 'react';
import QuizCard from './QuizCard';

const perguntas = [
  {
    pergunta: "Qual é o nome da função principal obrigatória em todo programa C?",
    opcoes: [
      "start()",
      "main()",
      "init()",
      "program()"
    ],
    correta: 1
  },
  {
    pergunta: "O que significa uma função declarada como 'void' em C?",
    opcoes: [
      "Ela retorna o valor zero",
      "Ela não retorna nenhum valor",
      "Ela é executada apenas uma vez",
      "Ela não pode ter parâmetros"
    ],
    correta: 1
  },
  {
    pergunta: "Como se passa um vetor de inteiros para uma função chamada 'processa'?",
    opcoes: [
      "processa(int vetor);",
      "processa(vetor);",
      "processa(&vetor);",
      "processa(int[] vetor);"
    ],
    correta: 1
  },
  {
    pergunta: "Onde deve ser feita a declaração (protótipo) de uma função usada antes de sua definição?",
    opcoes: [
      "Dentro da função main()",
      "No final do arquivo .c",
      "Antes da função main(), geralmente no início do arquivo",
      "Não é necessário em C moderno"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o escopo de uma variável declarada dentro de uma função?",
    opcoes: [
      "Global acessível por todo o programa",
      "Local acessível apenas dentro da função",
      "Estático mantém valor entre chamadas, mas só visível na função",
      "Depende do compilador"
    ],
    correta: 2
  }
];

export default function FuncaoQuiz() {
  return (
    <div>
      <h2>Quiz: Função</h2>
      {perguntas.map((q, i) => (
        <QuizCard key={i} pergunta={q.pergunta} opcoes={q.opcoes} correta={q.correta} />
      ))}
    </div>
  );
}