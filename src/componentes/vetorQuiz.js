import React from "react";
import QuizCard from "./QuizCard";

const perguntas = [
  {
    pergunta:
      "Qual é o tamanho máximo de um vetor declarado como char nome[50];?",
    opcoes: [
      "49 caracteres (mais 1 para o '\0')",
      "50 caracteres, incluindo o terminador nulo",
      "50 caracteres, sem espaço para '\0'",
      "Depende do sistema operacional",
    ],
    correta: 1,
  },
  {
    pergunta: "Como passar um vetor como argumento para uma função em C?",
    opcoes: [
      "Passando o nome do vetor (sem colchetes)",
      "Usando o operador &vetor",
      "Usando vetor[] na chamada",
      "Não é possível passar vetores em C",
    ],
    correta: 0,
  },
  {
    pergunta:
      "O que acontece se você acessar vetor[10] em um vetor declarado como int vetor[10];?",
    opcoes: [
      "Acesso ao último elemento válido",
      "Erro de compilação",
      "Comportamento indefinido (acesso fora dos limites)",
      "O compilador aumenta automaticamente o tamanho",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual destes NÃO é uma característica de vetores em C?",
    opcoes: [
      "Tamanho fixo após a declaração",
      "Elementos armazenados em posições contíguas de memória",
      "Tipo dos elementos pode variar dentro do mesmo vetor",
      "Acesso rápido por índice (O(1))",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual a saída do código: int v[] = {1,2,3}?",
    opcoes: ["1", "2", "3", "Erro de compilação"],
    correta: 1,
  },
];

export default function VetorQuiz() {
  return (
    <div className="container">
      <div className="main">
        <img
          src="https://em-content.zobj.net/source/apple/76/input-symbol-for-latin-letters_1f524.png"
          width={30}
          className="image"
        />

        <h2>quiz vetores</h2>
        <a>(arrays unidimensionais)</a>

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
