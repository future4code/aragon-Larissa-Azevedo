import axios from "axios";
import { useEffect, useState } from "react";

export default function ProfilePage() {

    const [profile, setProfile] = useState();

    useEffect(() => {
        getProfile();
    },[])

    const getProfile = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/person";

        axios.get(url)
        .then((response) => {
            setProfile(response.data.profile)
        })
        .catch((error) =>{
            console.log(error.response)
        });
    };

    const chooseProfile = (profileId, choice) =>{

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/choose-person"

        const body = {
            id: profileId,
            choice: choice
        };

        axios.post(url, body)
        .then(()=>{
            getProfile();
        })
        .catch((error)=>{
            console.log(error.response)
        });
    };

    const resetProfileList = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lari-azevedo-aragon/clear";

        axios.put(url)
        .then(()=> {
            alert("☆Perfis zerados!☆");
            getProfile()
            
        })
        .catch((error) =>{
            console.log(error.response)
        })

    }

    const card = profile &&(
        <figure>

            <img
            src={profile.photo}
            alt={profile["photo_alt"]}
            height={"280px"}
            ></img>

            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
           
            <button onClick={()=> chooseProfile(profile.id, false)}> thank u, next</button>
            <button onClick={()=> chooseProfile(profile.id, true)}> i want u</button>
            
        </figure>
    )



    return(
        <>
            <h2>☆ Perfis ☆</h2>
                  {card}
            
            <button onClick={()=> resetProfileList()}> ★ Zerar Perfis ★ </button>
        </>
    );
};
