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

    const card = profile &&(
        <figure>

            <img
            src={profile.photo}
            alt={profile["photo_alt"]}
            height={"280px"}
            ></img>

            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={()=> getProfile()}> thank u, next</button>

        </figure>
    )



    return(
        <>
            <h2>☆ Perfis ☆</h2>
                  {card}
        </>
    );
};
