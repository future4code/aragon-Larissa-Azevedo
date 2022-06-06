import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (path, initialState) => {
    const [data, setData] = useState(initialState);

    const getData = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/${path}`, header)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            alert(error.response.data)
        });

    };

    useEffect(() =>{
        getData();
    }, [path]);

    return [data, getData]
}

export default useRequestData;