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
    .post("https://labeddit.herokuapp.com/posts", body, header)
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

export const requestCreateComment = (form, clear, getPostComments, postId) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    body: form.body,
  };

  axios
    .post(
      `https://labeddit.herokuapp.com/posts/${postId}/comments`, body, header)
    .then((response) => {
      alert(response.data);
      getPostComments(postId);
      clear();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestCreateCommentVote = (commentId, direction, getPostComments, postId) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .post(
      `https://labeddit.herokuapp.com/comments/${commentId}/votes`, body, header)
    .then(() => {
      alert("Voto registrado :)");
      getPostComments(postId);
    })
    .catch((error) => {
      console.log(error.message);
    });
};


export const requestChangeCommentVote = (commentId, direction, getPostComments, postId ) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .put(
      `https://labeddit.herokuapp.com/comments/${commentId}/votes`, body, header)
    .then(() => {
      alert("Você alterou seu voto :)");
      getPostComments(postId);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestDeletePostVote = (postId, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  axios
    .delete(`https://labeddit.herokuapp.com/posts/${postId}/votes`, header)
    .then(() => {
      alert("Você removeu seu voto :)");
      getPosts();     
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestDeleteCommentVote = (commentId, postId, getPostComments) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  axios
    .delete(`https://labeddit.herokuapp.com/comments/${commentId}/votes`, header)
    .then(() => {
      alert("Você removeu seu voto :)");
      getPostComments(postId);     
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestCreatePostVote = (postId, direction, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .post(`https://labeddit.herokuapp.com/posts/${postId}/votes`, body, header)
    .then(() => {
      alert("Você votou :)");
      getPosts();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const requestChangePostVote = (postId, direction, getPosts) => {

  const header = {
    headers: {
        authorization: localStorage.getItem("token")
    }
};
  const body = {
      direction: direction
  };

  axios
      .put(`https://labeddit.herokuapp.com/posts/${postId}/votes`, body, header)
      .then(() => {
          alert("Voto modificado com sucesso!");
          getPosts();
      })
      .catch((err) => {
          console.log(err.message);
      });
}