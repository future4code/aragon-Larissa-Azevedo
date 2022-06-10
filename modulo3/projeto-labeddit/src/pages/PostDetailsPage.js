import { useProtectedPage } from "../hooks/useProtectedPage";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToFeedPage } from "../routes/coordinator";
import { requestCreateComment } from "../services/requests";
import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";

export default function PostDetailsPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const params = useParams();

  const { form, onChange, clear } = useForm({ body: "" });

  const { states, getters } = useContext(GlobalStateContext);

  const { post, postComments, isLoading } = states;

  const { getPostComments } = getters;

  useEffect(() => {
    if (post.id && post.id === params.postId) {
      getPostComments(post.id);
    } else {
      alert("Ocorreu um erro! Voltando para o Feed...");
      goToFeedPage(navigate);
    }
  }, []);

  const createComment = (event) => {
    event.preventDefault();

    requestCreateComment(form, clear, getPostComments, post.id);
  };

  const showComments = postComments.length ? postComments.map((comment) => {
      return(
        <CommentCard
          key={comment.id}
          comment={comment}
          />
      )
    }) : <p>Seja a primeira a pessoa a comentar!</p>
  

  return (
    <main>
      <Header
        isProtected={true} />
      <hr />
      <button onClick={() => navigate(-1)}>Voltar</button>

      <section>
        <h2>Detalhes do Post</h2>
        <PostCard 
          key={post.id}
          post={post} 
          isFeed={false} />
      </section>

      <hr />
      <section>
        <h2>Digite seu Comentário</h2>
        <form onSubmit={createComment}>
          <label htmlFor={"body"}>Comentário: </label>
          <input
            id={"body"}
            type={"text"}
            name={"body"}
            value={form.body}
            onChange={onChange}
            pattern={"^.{5,}$"}
            title={"Mínimo de 5 caracteres"}
            required
          />
          <br /> <br />
          <button type={"submit"}>Comentar</button>
        </form>
      </section>

      <hr />
      <section>
        <h2>Lista de Comentários</h2>
        {isLoading ? <p>Organizando Comentários...</p> : showComments}
      </section>
    </main>
  );
}
