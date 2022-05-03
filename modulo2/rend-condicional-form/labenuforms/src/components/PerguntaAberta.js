import React from "react";

function PerguntaAberta(props) {
  return (
    <section>
      <p>{props.pergunta}</p>
      <p>
        <input onChange={props.onChange} value={props.value} />
      </p>
    </section>
  );
}

export default PerguntaAberta;
