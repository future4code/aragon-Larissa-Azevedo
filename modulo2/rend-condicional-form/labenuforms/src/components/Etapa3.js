import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa3 extends React.Component{
    state = {
        cursoGraduacao: "",
        cursoComplementar: ""
    };

    motivoGraduacao = cursoGraduacao => {
        this.cursoGraduacao = cursoGraduacao;
    };

    novoCursoComplementar = cursoComplementar => {
        this.novoCursoComplementar = cursoComplementar;
    };

    render() {
        return (
            <section>
                <h4>3ª ETAPA - INFORMAÇÕES GERAIS SOBRE ENSINO</h4>
                <PerguntaAberta
                onChange={this.motivoGraduacao}
                pergunta={"5 - Por que não terminou o curso de graduação?"}
                />

                <PerguntaFechada
                onChange={this.cursoComplementar}
                pergunta={"6 - Você fez algum curso complementar? Escolha:"}
                respostas={["Nenhum", "Curso Técnico", "Curso de Idiomas"]}
                />

                <p>
                <button onClick= {() => this.props.clicandoProximaEtapa(4)}>Concluir a pesquisa</button>                    
                </p>  
            </section>
        );
    }
}

 export default Etapa3;

