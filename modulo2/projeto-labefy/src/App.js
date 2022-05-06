import React from "react";
import axios from "axios";

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class App extends React.Component {
  state = {
    playlists: [],
    inputName: ""
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

  getPlaylists = () => {
    const header = {
      headers: {
        Authorization: "lari-azevedo-aragon"
      }
    };

    axios.get(BASE_URL, header)
        .then((res) => {
         this.setState({ playlists: res.data.result.list });
      })
        .catch((err) => {
         alert(err.response.data);
      });
  };

  createPlaylist = () => {
    const header = {
      headers: {
        Authorization: "lari-azevedo-aragon"
      }
    };

    const body = {
      name: this.state.inputName
    };

    axios.post(BASE_URL, body, header)
         .then(() => {
            alert("▷ Criada com sucesso! Desce o play :)");
            this.setState({ inputName: "" });
            this.getPlaylists();
          })
         .catch((err) => {
            if (
              err.response.data.message ===
              "There already is a playlist with a similiar name."
            ) {
              alert("Essa playlist já existe! ⏸ Pause e escolha outro título");
            }
        });
  };

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

    return (
      <div>
        <h1>Labefy 🎧 </h1>
        <input
          onKeyDown={this.handleClickEnter}
          value={this.state.inputName}
          onChange={this.handleName}
        />
        <button onClick={this.createPlaylist}>Criar Playlist 🎶</button>
        <hr />
        {playlistComponents}
      </div>
    );
  }
}


