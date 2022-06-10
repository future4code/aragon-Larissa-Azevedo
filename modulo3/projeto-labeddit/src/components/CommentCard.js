import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { requestChangeCommentVote, requestCreateCommentVote, requestDeleteCommentVote } from "../services/requests";

export default function CommentCard(props) {

  const {getters} = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const {getPostComments} = getters;

  const { id, userId, postId, body, createdAt, voteSum, userVote } = props.comment;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if(userVote){
      userVote === 1 ?  setIsUpVoted(true) : setIsDownVoted(true)
    };
  },[userVote])

  const chooseVote = (typeVote) => {
    if(typeVote === "up") {
      if(isDownVoted){
        requestChangeCommentVote(id, 1, getPostComments, postId)
        setIsUpVoted(true);
        setIsDownVoted(false);
      } else{
          requestCreateCommentVote(id, 1, getPostComments, postId);
          setIsUpVoted(true);
      };
    } else{
      if(isUpVoted) {
        requestCreateCommentVote(id, -1, getPostComments, postId)
        setIsDownVoted(true);
        setIsUpVoted(false);
      } else{
        requestCreateCommentVote(id, -1, getPostComments, postId)
        setIsDownVoted(true);
      };
    };
  };

  const removeVote = (typeVote) => {
    requestDeleteCommentVote(id, getPostComments, postId);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false)
  };

  const showVoteButtons = (
    <section>
      {userVote && isDownVoted ?
      <button onClick={() => removeVote("down")}>Remover voto "Nâo Gostei"</button> :
      <button onClick={()=> chooseVote("down")}>
        {isUpVoted ? `Alterar voto para "Não Gostei"`: `Votar em "Não Gostei" `}
      </button>      
      }
      <br /> <br />

      {userVote && isUpVoted ?
      <button onClick={() => removeVote("up")}>Remover voto "Gostei</button> :
      <button onClick={() => chooseVote("up")}>
        {isDownVoted ? `Alterar voto para "Gostei"` : `Votar em "Gostei"`}
      </button>
      }      
    </section>
  );



  return (
    <article>
      <h3>{body}</h3>
      <span>Autor: {userId}</span>
      <p>Criado em {date}</p>
      <p>Votos: {voteSum ? voteSum : 0}</p>
                {showVoteButtons}
      <hr/>
    </article>
  );
}
