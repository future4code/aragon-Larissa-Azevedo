import { format } from "date-fns";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPostDetailsPage } from "../routes/coordinator";

export default function PostCard(props) {
  const navigate = useNavigate();

  const { setters } = useContext(GlobalStateContext);

  const {setPost} = setters;

  const { id, userId, title, body, createdAt, likes, comments } = props.post;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  const goToComments = () => {
    setPost(props.post);
    goToPostDetailsPage(navigate, id);
  };

  return (
    <article>
      <h3>{title}</h3>
      <span>Postado por: {userId}</span>
      <p>Criado em: {date}</p>
      <img
        src={"https://picsum.photos/200/200?random=" + id}
        alt="Imagem aleatória do post"
      />
      <p>Descrição: {body}</p>
      <p>Votos: {likes ? likes : 0}</p>
      <button> Gostei </button>
      <br /> <br />
      <button>Não Gostei</button>
      <p>Comentários: {comments ? comments : 0}</p>
      {props.isFeed && <button onClick={goToComments}>Ver comentários</button>}
      <hr />
    </article>
  );
}

