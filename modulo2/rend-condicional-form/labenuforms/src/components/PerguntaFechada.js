import React from "react";

function PerguntaFechada(props) {
  return (
    <section>
      <p>{props.pergunta}</p>
      <p>
        <select>
          {props.respostas.map(resposta => (
            <option value={resposta}>{resposta}</option>
          ))}
        </select>
      </p>
    </section>
  );
}

export default PerguntaFechada;
