import React from "react";
import axios from "axios";
// import styled from "./styles.css"
import { BASE_URL } from "../../constants";
import { AxiosConfig } from "../../constants";

export default class PlaylistDetails extends React.Component{

    state ={
        playLists: [],
        inputSearchPlayList: "",
        trackList: [],
        viewTrack: false,
        playlistId: "",
        playlistName: "",
        inputName: "",
        inputArtist: "",
        inputUrl: "",
    }


    deletePlaylist = async (playlist) => {

        const confirm = window.confirm(`Tem certeza que deseja excluir ${playlist.name}?`)
        if (confirm === true) {
            try {
                await axios.delete(`${BASE_URL}/${playlist.id}`, AxiosConfig)
                this.getAllPlayLists()
                window.location.reload();
                alert("Excluída com sucesso!")
            } catch (err) {
                alert("Opa, deu erro! Tente excluir novamente")

            }
        }
    }

    render(){
        return(
            <section>
                <button onClick={() => this.deletePlaylist}>EXCLUIR</button>

            </section>
        )
    }

}