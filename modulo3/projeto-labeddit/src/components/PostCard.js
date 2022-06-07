import { format } from "date-fns";

function PostCard(props) {
  const { id, userId, title, body, createdAt, likes, comments } = props.post;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  return (
    <article>
      <h3>{title}</h3>
      <span>Autor: {userId}</span>
      <p>Criado em: {date}</p>
      <img
        src={"https://picsum.photos/200/200?random=" + id}
        alt="Imagem aleatória do post"
      />

      <p>Descrição: {body}</p>
      <p>Votos: {likes ? likes : 0}</p>

      <button> Gostei </button>
      <br />
      <button>Não Gostei</button>
      <p>Comentários: {comments ? comments : 0}</p>
      <button>Ver comentários</button>
      <hr />
    </article>
  );
}

export default PostCard;
