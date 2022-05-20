import axios from "axios";
import { useEffect, useState } from "react";
// import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

// const TelaMatch = styled.div`
// font-family: roboto;
// text-align: center;
// padding: 10px;

// .nome{
//     padding: 8px;
// }
// `

export default function MatchPage() {
  const [match, setMatch] = useState();

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/matches";

    axios
      .get(url)
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const matches =
    match &&
    match.map((match) => {
      return (
        <Box
          sx={{
            width: 200,
            height: 85,
            p: 2,
            borderRadius: 2,
            position: "sticky",
            fontSize: "1rem",
            fontWeight: "700",
            left: "43.5%",
            zIndex: "tooltip",
            backgroundColor: "#f5f5f5",
            boxShadow: 1,
            "&:hover": {
              backgroundColor: "#c2185b",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <figure key={match.id}>
            <img
              src={match.photo}
              alt={`Exibição da foto do match ${match.name}`}
              height={"60px"}
            />

            <Typography sx={{ fontWeight:"200"}}>
              <span>{match.name}</span>
            </Typography>
          </figure>
        </Box>
      );
    });

  return (
    <>
      <Typography component="div">
        <Box sx={{ letterSpacing: 10, m: 1, fontWeight: "700", color: '#e91e63' }}>
          <h2> ☆ Matches ☆</h2>
        </Box>
      </Typography>
        <Grid container direction="column">
          {matches &&
            matches.map((match) => {
              return <ul>{match}</ul>;
            })}
      {/* {matches} */}
      </Grid>
    </>
  );
}
