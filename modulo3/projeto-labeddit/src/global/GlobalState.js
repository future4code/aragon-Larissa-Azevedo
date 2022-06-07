import axios from "axios";
import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get("https://labeddit.herokuapp.com/posts?page=1&size=10", header)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const states = { posts };
  const setters = { setPosts };
  const getters = { getPosts };

  return (
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
