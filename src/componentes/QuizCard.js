import React, { useState } from "react";
import styles from "./quizCard.module.css";

export default function QuizCard({ pergunta, opcoes, correta, numero }) {
  const [selecionada, setSelecionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const verificar = (index) => {
    setSelecionada(index);
    setMostrarResultado(true);
  };

  return (
    <div className={styles.card}>
      <h3>
        <span>{numero}. </span>
        {pergunta.toLowerCase()}
      </h3>
      <div className={styles.opcoes}>
        {opcoes.map((opcao, index) => (
          <button
            key={index}
            onClick={() => verificar(index)}
            disabled={mostrarResultado}
            className={`${styles.botao} ${
              mostrarResultado
                ? index === correta
                  ? styles.correto
                  : index === selecionada
                    ? styles.errado
                    : ""
                : ""
            }`}
          >
            {opcao}
          </button>
        ))}
      </div>
      {mostrarResultado && (
        <p className={selecionada === correta ? styles.acerto : styles.erro}>
          {selecionada === correta ? "✅ Correto!" : "❌ Errado!"}
        </p>
      )}
    </div>
  );
}
