import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 2px solid orange;
  padding: 10px;
  margin:12px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "lari-azevedo-aragon",
        },
      });
      this.setState({ usuarios: res.data });
    } catch (err) {
      alert("Opa, deu erro! Tente novamente.");
    }
  };

  deletarUsuario = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

      try {
        await axios.delete(url, {
          headers: {
            Authorization: "lari-azevedo-aragon",
          },
        });
        this.pegarUsuarios()
        alert("Excluído com sucesso!");

      }
        catch (err) {
        alert("Ih, não deu. Tente novamente.");
      }
    }
  };

  render() {
    console.log(this.state.usuarios);
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>Excluir</button>
        </CardUsuario>
      );
    });

    return (
      <section>
        <button className="botao" onClick={this.props.irParaCadastro}>
          Voltar para Tela de Cadastro
        </button>
        <h2 className="titulo">Lista de Usuários</h2>
        {listaUsuarios}
      </section>
    );
  }
}
