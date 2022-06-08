import axios from "axios";
import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState([]);

  const [postComments, setPostComments] = useState([]);

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

  const getPostComments = (postId) => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`https://labeddit.herokuapp.com/posts/${postId}/comments`, header)
      .then((response) => {
        setPostComments(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const states = { posts, post, postComments };
  const setters = { setPosts, setPost, setPostComments };
  const getters = { getPosts, getPostComments };

  return (
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
