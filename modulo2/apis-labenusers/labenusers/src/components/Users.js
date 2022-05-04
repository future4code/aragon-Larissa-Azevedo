import React from "react";
import axios from "axios";

const axiosInfo = {
    headers: {
      Authorization: "lari-azevedo-aragon"
    }
  };
  
  class UserDetail extends React.Component {
    state = {
      userDetail: {},
      name: "",
      email: ""
    };
  
    componentDidMount() {
      this.getUserDetail();
    }
  
    getUserDetail = () => {
      axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
            this.props.userId
          }`,
          axiosInfo
        )
        .then(response => {
          this.setState({ userDetail: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    };
  
  
    handleNameChange = event => {
      const newNameValue = event.target.value;
  
      this.setState({ name: newNameValue });
    };
  
    handleEmailChange = event => {
      const newEmailValue = event.target.value;
  
      this.setState({ email: newEmailValue });
    };
  
    handleCreateUser = () => {
      const body = {
        name: this.state.name,
        email: this.state.email
      };
  
      axios
        .put(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
            this.props.userId
          }`,
          body,
          axiosInfo
        )
        .then(() => {
          this.setState({ name: "", email: "" });
          this.getUserDetail();
          alert(`Usuário ${this.state.name} criado com sucesso!`);
        })
        .catch(error => {
          alert("Erro ao criar o usuário");
          console.log(error);
        });
    };
  
    render() {
      const userEdition =
        this.state.userEdition === "createButton" ? (
          <button onClick={this.changeUserEdition}>Editar usuário</button>
        ) : (
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
  
      return (
        <div>
          <div>
            <p>{this.state.userDetail.name}</p>
            <p>{this.state.userDetail.email}</p>
          </div>
          <div>{userEdition}</div>
          <hr />
          <button onClick={this.props.changePage}>
            Voltar para lista de usuários
          </button>
        </div>
      );
    }
  }
  
  export default UserDetail;