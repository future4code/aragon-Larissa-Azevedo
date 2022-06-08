import axios from "axios";
import { goToFeedPage } from "../routes/coordinator";

export const requestLogin = (form, clear, navigate) => {
  const body = {
    email: form.email,
    password: form.password,
  };

  axios
    .post("https://labeddit.herokuapp.com/users/login", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", form.email);
      alert("Login realizado com sucesso :)");
      goToFeedPage(navigate);
    })
    .catch((error) => {
      alert("Dados inválidos! Tente novamente!");
      clear();
    });
};

export const requestCreatePost = (form, clear, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    title: form.title,
    body: form.body,
  };

  axios
    .post("https://labeddit.herokuapp.com/users/posts", body, header)
    .then((response) => {
      alert(response.data);
      getPosts();
      clear();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestSignUp = (form, clear, navigate) => {
  const body = {
    username: form.name,
    email: form.email,
    password: form.password,
  };

  axios
    .post("https://labeddit.herokuapp.com/users/signup", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", form.email);
      alert("Cadastro realizado! Bem-Vindo ao LabEddit!");
      goToFeedPage(navigate);
    })
    .catch((error) => {
      alert("Ops! Algo de errado não está certo. Tente novamente.");
      clear();
    });
};

export const requestCreateComment = (form, clear, getPostComments, postId) =>{
  const header = {
    headers: {
      authorization:localStorage.getItem("token")
    }
  };

  const body = {
    body: form.body
  };

  axios.post(`https://labeddit.herokuapp.com/posts/${postId}/comments`, body, header)
  .then((response)=>{
    alert(response.data);
    getPostComments(postId);
    clear();
  })
  .catch((error) => {
    console.log(error.message);
  });
}