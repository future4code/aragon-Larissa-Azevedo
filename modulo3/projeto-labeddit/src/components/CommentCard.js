import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { requestChangeCommentVote,  requestCreateCommentVote, requestDeleteCommentVote} from "../services/requests";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CommentCard(props) {
  const { getters } = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const { getPostComments } = getters;

  const { id, userId, postId, body, createdAt, voteSum, userVote } =
    props.comment;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if (userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    }
  }, [userVote]);

  const chooseVote = (typeVote) => {
    if (typeVote === "up") {
      if (isDownVoted) {
        requestChangeCommentVote(id, 1, getPostComments, postId);
        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        requestCreateCommentVote(id, 1, getPostComments, postId);
        setIsUpVoted(true);
      }
    } else {
      if (isUpVoted) {
        requestCreateCommentVote(id, -1, getPostComments, postId);
        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        requestCreateCommentVote(id, -1, getPostComments, postId);
        setIsDownVoted(true);
      }
    }
  };

  const removeVote = (typeVote) => {
    requestDeleteCommentVote(id, getPostComments, postId);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  const showVoteButtons = (
    <section>
      {userVote && isDownVoted ? (
        <Button
          variant="outlined"
          sx={{ fontFamily: "monospace" }}
          onClick={() => removeVote("down")}
        >
          Remover Dislike
        </Button>
      ) : (
        <Button sx={{ ml: 2 }} onClick={() => chooseVote("down")}>
          {isUpVoted ? <ThumbDownAltIcon /> : <ThumbDownAltIcon />}
        </Button>
      )}

      {userVote && isUpVoted ? (
        <Button
          variant="outlined"
          sx={{ fontFamily: "monospace" }}
          onClick={() => removeVote("up")}
        >
          Desfazer Like
        </Button>
      ) : (
        <Button sx={{ mr: 2 }} onClick={() => chooseVote("up")}>
          {isDownVoted ? <ThumbUpIcon /> : <ThumbUpIcon />}
        </Button>
      )}
    </section>
  );

  return (
    <article>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          alignItems: "center",          
        }}
      >
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="section"
              sx={{
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "#f57c00",
                bgcolor:"#e0e0e0"
              }}
            >
              {body}
            </Typography>
            <Typography>
            <p><b>Autor:</b> {userId}</p>
            <p><b>Criado em</b> {date}</p>
            <p><b>Votos:</b> {voteSum ? voteSum : 0}</p>
            </Typography>
            {showVoteButtons}

          </CardContent>
        </Card>
      </Box>

    </article>
  );
}
