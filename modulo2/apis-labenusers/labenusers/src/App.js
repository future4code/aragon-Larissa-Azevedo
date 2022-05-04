import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from './components/TelaListaUsuarios';
import styles from './styles.css'


export default class App extends React.Component{

  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <section>Opa! Nada encontrado por aqui...</section>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <section className='principal'>
        {this.escolheTela()}
        </section>
    )
  }
}

