import React from "react";
import axios from "axios";
import styles from "./styles.css";
import { BASE_URL } from "./constants";
import { AxiosConfig } from "./constants";
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails"


export default class App extends React.Component {
  state = {
    playlists: [],
    tracks: [],
    playlistId: [],
    inputValue: "",
    inputName: "",
    inputArtist:"",
    inputUrl:"",
    screen:"createPlaylist"
  };

  componentDidMount() {
    this.getPlaylists();
  }

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleClickEnter = (event) => {
    if (event.keyCode === 13) {
      this.createPlaylist();
    }
  };


  createPlaylist = () => {
    const body = {
      name: this.state.inputName
    };

    axios.post(BASE_URL, body, AxiosConfig)
         .then(() => {
            alert(`Aperta o play! ▷ ${body.name.toUpperCase()} criada com sucesso!`);
            this.setState({ inputName: "" });
            this.getPlaylists();
          })
         .catch((err) => {
            if (
              err.response.data.message ===
              "There already is a playlist with a similiar name."
            ) {
              alert(`A playlist ${body.name.toUpperCase()} já existe! ⏸ Pause e escolha outro título!`);
            }
        });
  };

  getPlaylists = () => {
    axios.get(BASE_URL, AxiosConfig)
        .then((res) => {
         this.setState({ playlists: res.data.result.list });
      })
        .catch((err) => {
         alert(err.response.data);
      });
  };

  deletePlaylist = (play) => {
    if(
      window.confirm(`Tem certeza que deseja excluir ${play.name}?`)
    ) 
    {axios.delete(BASE_URL, AxiosConfig)
      .then((res)=> {
        this.getPlaylists();
      })
      .catch((err)=>{
        alert(err.response.data.message, "Deu erro para excluir! Se quiser, tente novamente.")
      });     

  }
}

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

    return (      
        <section>
          <h1>Labefy 🎧 </h1>
          <input placeholder="digite o título aqui ♪"
            onKeyDown={this.handleClickEnter}
            value={this.state.inputName}
            onChange={this.handleName}
          />
          <button onClick={this.createPlaylist}>Criar Playlist ▶</button>          
          <hr />
          
          {playlistComponents}
          
        </section>
    );
  }
}


