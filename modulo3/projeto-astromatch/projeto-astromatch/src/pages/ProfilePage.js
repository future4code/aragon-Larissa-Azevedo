import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { light } from "@mui/material/styles/createPalette";



export default function ProfilePage() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/person";

    axios
      .get(url)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const chooseProfile = (profileId, choice) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/choose-person";

    const body = {
      id: profileId,
      choice: choice,
    };

    axios
      .post(url, body)
      .then((response) => {
        if(body.choice && response.data.isMatch){
          alert("Astromatch! ★ Estava escrito nas estrelas ★")
        }
        getProfile();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const resetProfileList = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/clear";

    axios
      .put(url)
      .then(() => {
        alert("☆Opções Recarregadas!☆");
        getProfile();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const card = profile ? (
    <figure>
      <Box
        sx={{
          width: 500,
          height: 400,
          p: 2,
          borderRadius: 2,
          position: "sticky",
          fontSize: "1rem",
          fontWeight: "700",
          fontFamily:"sans-serif",
          left: "36%",
          zIndex: "tooltip",
          backgroundColor: "#f5f5f5",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "#ede7f6",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <img
          src={profile.photo}
          alt={profile["photo_alt"]}
          height={"280px"}
        ></img>

          <Typography sx={{fontSize:20, fontWeight:700, color:'text.secondary'}}>
            {profile.name}, {profile.age}
          </Typography>
        
          <Typography sx={{fontSize:18, color: 'info.main'}}>
            <p>{profile.bio}</p>
          </Typography>
      </Box>
      
      <Button
        sx={{margin: 5, p:3}}
        variant="outlined"
        color="error"
        onClick={() => chooseProfile(profile.id, false)}
      >
        {" "}
        thank u, next
      </Button>

      <Button
        sx={{margin:5, p:3}}
        variant="contained"
        color="secondary"
        onClick={() => chooseProfile(profile.id, true)}
      >
        {" "}
        i want u
      </Button>
    </figure> ) : (
      <>
        <Typography sx={{margin: 5, p:3, color: 'error.main'}} >
          <h2>Opa! Suas opções acabaram... Recarregue os perfis ou volte mais tarde :)</h2>
        </Typography>
      
        <Button variant="outlined" color="secondary" onClick={() => resetProfileList()}>
            {" "}
            ★ Recarregar ★{" "}
        </Button>
      </>
    )
  

  return (
    <>
      <Typography component="div">
        <Box sx={{ letterSpacing: 10, m: 1, fontWeight: "700", color:'#e91e63' }}>
          <h2>☆ Perfis ☆</h2>
        </Box>
      </Typography>

      {card}
      
    </>
  );
}
