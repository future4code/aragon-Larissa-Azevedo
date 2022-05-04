import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {

  state = {
    nome: "",
    email: ""
  }

  handleNome = (event) => {
    this.setState({nome: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name:this.state.nome,
      email:this.state.email
    }

    axios.post(url,body, {
      headers: {
        Authorization: "lari-azevedo-aragon"
      }
    })
    .then ((res)=> {
      alert("Cadastro realizado com sucesso!")
      this.setState({nome:"", email:""})
    })

    .catch((err) => {
      alert(err.response.data.message)
    })

  }

  render() {
    return (
      <section>
        <button onClick={this.props.irParaLista}>
          Ir para Lista de Usuários
        </button>
        <h2>Cadastro</h2>

        <input 
        placeholder={"Digite seu nome"}
        value={this.state.nome}
        onChange={this.handleNome}
        />

        <input 
        placeholder={"Digite seu e-mail"}
        value={this.state.email}
        onChange={this.handleEmail}
        />

        <button onClick={this.fazerCadastro}>Clique & Cadastre</button>
      </section>
    );
  }
}

// class Login extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   handleNameChange = (event) => {
//     const newNameValue = event.target.value;
//     this.setState({ name: newNameValue });
//   };

//   handleEmailChange = (event) => {
//     const newEmailValue = event.target.value;
//     this.setState({ email: newEmailValue });
//   };

//   handleCreateUser = (event) => {
//     const axiosInfo = {
//       headers: {
//         Authorization: "lari-azevedo-aragon",
//       },
//     };

//     const body = {
//       name: this.state.name,
//       email: this.state.email,
//     };

//     axios
//       .post(
//         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
//         body,
//         axiosInfo
//       )

//       .then(() => {
//         alert(`Seu usuário "${this.state.name}" foi criado!`);
//         this.setState({ name: "", email: "" });
//       })

//       .catch((error) => {
//         alert("Ocorreu um erro! Tente criar o usuário novamente");
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <section>
//         <input
//           placeholder="Digite seu nome"
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />

//         <input
//           placeholder="Digite seu e-mail"
//           type="email"
//           value={this.state.email}
//           onChange={this.handleEmailChange}
//         />

//         <button onClick={this.handleCreateUser}>Clique & Crie</button>
//       </section>
//     );
//   }
// }

// export default Login;
