import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;
    this.setState({ name: newNameValue });
  };

  handleEmailChange = (event) => {
    const newEmailValue = event.target.value;
    this.setState({ email: newEmailValue });
  };

  handleCreateUser = (event) => {
    const axiosInfo = {
      headers: {
        Authorization: "lari-azevedo-aragon",
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosInfo
      )

      .then(() => {
        alert(`Seu usuário "${this.state.name}" foi criado!`);
        this.setState({ name: "", email: "" });
      })

      .catch((error) => {
        alert("Ocorreu um erro! Tente criar o usuário novamente");
        console.log(error);
      });
  };

  render() {
    return (
      <section>
        <input
          placeholder="Digite seu nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <input
          placeholder="Digite seu e-mail"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <button onClick={this.handleCreateUser}>Clique & Crie</button>
      </section>
    );
  }
}

export default Login;
