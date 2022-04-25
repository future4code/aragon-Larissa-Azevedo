import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: ""
  };

  novoNome = nome => {
      this.nome = nome;
  };

  novaIdade = idade => {
      this.idade = idade;
  };

  novoEmail = email => {
      this.email = email;
  };

  novaEscolaridade = escolaridade => {
      this.escolaridade = escolaridade;
  };



  render() {
      return (
           <section>
               <h4>1ª ETAPA - DADOS GERAIS</h4>
               <PerguntaAberta
                onChange={this.novoNome}
                pergunta={"1 - Qual é o seu nome?"}
                />

                <PerguntaAberta
                onChange={this.novaIdade}
                pergunta={"2 - Quantos anos você tem?"}
                />

                <PerguntaAberta
                onChange={this.novoEmail}
                pergunta={"3 - Digite seu e-mail:"}
                />

                <PerguntaFechada
                onChange={this.novaEscolaridade}
                pergunta={"4 - Qual seu nível de escolaridade?"}
                respostas ={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
                />

                <p>
                    <button onClick= {() => this.props.clicandoProximaEtapa(2)}>Continuar a pesquisa</button>
                </p>
           </section>
      );
  }
}

export default Etapa1;
