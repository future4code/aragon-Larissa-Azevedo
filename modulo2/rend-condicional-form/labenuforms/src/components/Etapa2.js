import React from "react";
import PerguntaAberta from "./PerguntaAberta";

class Etapa2 extends React.Component {
    state ={
        curso: "",
        unidadeDeEnsino: "",        
    };

    novoCurso = curso => {
        this.curso = curso;
    };

    novaUnidadeDeEnsino = unidadeDeEnsino => {
        this.unidadeDeEnsino = unidadeDeEnsino
    };

   
    render() {
        return (
            <section>
                <h4>2ª ETAPA - INFORMAÇÕES DO ENSINO SUPERIOR</h4>
                <PerguntaAberta onChange={this.novoCurso}
                pergunta={"5 - Qual curso?"}
                />

                <PerguntaAberta onChange={this.novaUnidadeDeEnsino}
                pergunta = {"6 - Em qual unidade de ensino?"}
                />

                <p>
                <button onClick= {() => this.props.clicandoProximaEtapa(3)}>Continuar a pesquisa</button>
                </p>
            </section>
        );
    }
}

export default Etapa2;