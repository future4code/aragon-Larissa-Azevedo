import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import { requestChangePostVote, requestCreatePostVote, requestDeleteCommentVote, requestDeletePostVote } from "../services/requests";

export default function PostCard(props) {
  const navigate = useNavigate();

  const { setters, getters } = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const {setPost} = setters;

  const {getPosts} = getters

  const { id, userId, title, body, createdAt, likes, comments, userVote } = props.post;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if(userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    };
  }, [userVote])

  const goToComments = () => {
    setPost(props.post);
    goToPostDetailsPage(navigate, id);
  };

  const chooseVote = (typeVote) => {
    if(typeVote === "up") {
      if(isDownVoted) {
        requestChangePostVote(id, 1, getPosts);
        setIsUpVoted(true);
        setIsDownVoted(false);
      } else{
        requestChangePostVote(id, 1, getPosts);
        setIsUpVoted(true);
      };
    } else{
      if(isUpVoted){
        requestChangePostVote(id, -1, getPosts);
        setIsDownVoted(true);
        setIsUpVoted(false);
      } else{
        requestCreatePostVote(id, -1, getPosts)
        setIsDownVoted(true)
      };
    };
  };

  const removeVote = (typeVote) =>{
    requestDeletePostVote(id, getPosts);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  const showVoteButtons = props.isFeed && (
    <section>
      {userVote && isDownVoted ?
      <button onClick={() => removeVote("down")}>Remover voto "Não Gostei"</button> :
      <button onClick={() => chooseVote("down")}>
        {isUpVoted ? `Alterar para "Não Gostei"` : `Votar em "Gostei"`}
      </button>
      }
      <br /> <br />
      {userVote && isUpVoted ? 
      <button onClick={()=> removeVote("up")}> Remove voto "Gostei"</button> :
      <button onClick={() => chooseVote("up")}>
        {isDownVoted ? `Alterar para "Gostei"` : `Votar em "Gostei"`}
      </button>      
    };
    </section>
  );


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
                {showVoteButtons}
      <br /> <br />
      <button>Não Gostei</button>
      <p>Comentários: {comments ? comments : 0}</p>
      {props.isFeed && <button onClick={goToComments}>Ver comentários</button>}
      <hr />
    </article>
  );
}

