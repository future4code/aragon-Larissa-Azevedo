import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from './components/TelaListaUsuarios';

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
      <section>
        {this.escolheTela()}
        </section>
    )
  }
}



// export default class App extends React.Component{
//   state = {
//     currentPage: "signUp"
//   };

//   changePage = () => {
//     if (this.state.currentPage === "signUp") {
//       this.setState({ currentPage: "users" });
//     } else {
//       this.setState({ currentPage: "signUp" });
//     }
//   };

//   render(){
//     return(
//       <section>
//         {this.setState.currentPage === "signUp" ? <Login /> : <Users/>}
//         <button onClick={this.changePage}>Trocar a tela</button>        
//       </section>
//     );
//   }

// }

