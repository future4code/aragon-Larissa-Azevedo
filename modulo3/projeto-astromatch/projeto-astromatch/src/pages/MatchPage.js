import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TelaMatch = styled.div`
font-family: roboto;
text-align: center;
padding: 10px;

.nome{
    padding: 8px;
}
`

export default function MatchPage() {

    const [match, setMatch] = useState();

    useEffect(()=>{
        getMatch()
    },[]);

    const getMatch = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/matches";

        axios.get(url)
        .then((response) => {
            setMatch(response.data.matches)
        })
        .catch((error) =>{
            console.log(error.response)
        });
    }

    const matches = match && match.map((match) =>{
        return(
            <TelaMatch>
            <figure key ={match.id}>
                <img
                src={match.photo}
                alt={`Exibição da foto do match ${match.name}`}
                height={"50px"}
                />

                <span className="nome">{match.name}</span>
            
            </figure>
            </TelaMatch>
        )
    })


    return(
        <>
            <h2>☆ Matches ☆</h2>
                 {matches}
        </>
    );
};
