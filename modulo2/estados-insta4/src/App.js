import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CriarPostContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-itens:center;
padding:20px;
row-gap: 10px;
border: 1px dotted black;
margin: 10px 0;
`;


class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "cecilia",
        fotoUsuario:
          "https://media.istockphoto.com/vectors/man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-vector-id1135031219?k=20&m=1135031219&s=170667a&w=0&h=0cjbtlApJKsRUlWKn91BFtBVB3efSne3KDCXihjN-yk=",
        fotoPost:
          "https://i.pinimg.com/originals/5f/02/0f/5f020fdd2700b5b97dc0e9d4b32c5a18.jpg",
      },

      {
        nomeUsuario: "_virginia",
        fotoUsuario:
          "https://planofunerario.net.br/wp-content/uploads/2021/06/perfil-2.png",
        fotoPost:
          "https://i.guim.co.uk/img/media/e3369c80c8b966869cf47db3783250d5987a9096/1604_997_1520_912/master/1520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=4d988fd9ae578255bee7b25ea9319cfb",
      },

      {
        nomeUsuario: "em1ly",
        fotoUsuario:
          "https://thumbs.dreamstime.com/b/icone-do-perfil-usu%C3%A1rio-com-tend%C3%AAncia-de-cria%C3%A7%C3%A3o-ilustra%C3%A7%C3%A3o-colorida-bot%C3%A3o-redondo-156511788.jpg",
        fotoPost:
          "https://1.bp.blogspot.com/-HTucL2CgxZk/XukZGLgJk0I/AAAAAAAAAyM/f3CUVMU354kmKsRC0phEYBFTsBLJvB3VQCLcBGAsYHQ/s1600/ACC0ED20-740B-4FA7-9815-3834A4699C53.jpeg",
      },
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  onChangeInputPessoa = (event) => {
    this.setState({
      valorInputNome: event.target.value
    });
    console.log(event.target.value);
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value
    });
    console.log(event.target.value);
  };

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value
    });
    console.log(event.target.value);
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [novoPost, ...this.state.posts];

    this.setState({
      posts: novosPosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  render() {
    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <CriarPostContainer>
          <input
            placeholder="Seu username"
            value={this.state.valorInputNome}
            onChange={this.onChangeInputPessoa}
          />
          <input
            placeholder="Insira sua foto"
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
          />
          <input
            placeholder="Insira o post"
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          />
          <button onClick={this.adicionaPost}>Postar!</button>
        </CriarPostContainer>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
