import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  fazerCadastro = async() => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    try{
      const cadastro = await axios.post(url, body, {
        headers: {
          Authorization: "lari-azevedo-aragon",
        }
          });
          this.setState({body: cadastro.data })
          alert("Cadastro realizado com sucesso! Consulte a lista.");    
      } 
      catch(err) {
        alert(err.response.data.message);
      }
    }

  render() {
    return (
      <section className="telaCadastro">
        <h2>Labenusers</h2>
        <button className="botao" onClick={this.props.irParaLista}>
          Ir para Lista de Usuários
        </button>
        <h1>Cadastro</h1>

        <input className="input"
          placeholder={"Digite seu nome"}
          value={this.state.nome}
          onChange={this.handleNome}
        />

        <input className="input"
          placeholder={"Digite seu e-mail"}
          value={this.state.email}
          onChange={this.handleEmail}
        />

        <button className="botao" onClick={this.fazerCadastro}>Clique & Cadastre</button>
       
      </section>
    );
  };
}
