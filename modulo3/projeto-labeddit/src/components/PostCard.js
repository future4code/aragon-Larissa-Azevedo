import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import {  requestChangePostVote, requestCreatePostVote, requestDeletePostVote} from "../services/requests";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PostCard(props) {
  const navigate = useNavigate();

  const { setters, getters } = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const { setPost } = setters;

  const { getPosts } = getters;

  const {
    id,
    userId,
    title,
    body,
    createdAt,
    voteSum,
    commentCount,
    userVote,
  } = props.post;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if (userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    }
  }, [userVote]);

  const goToComments = () => {
    setPost(props.post);
    goToPostDetailsPage(navigate, id);
  };

  const chooseVote = (typeVote) => {
    if (typeVote === "up") {
      if (isDownVoted) {
        requestChangePostVote(id, 1, getPosts);
        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        requestChangePostVote(id, 1, getPosts);
        setIsUpVoted(true);
      }
    } else {
      if (isUpVoted) {
        requestChangePostVote(id, -1, getPosts);
        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        requestCreatePostVote(id, -1, getPosts);
        setIsDownVoted(true);
      }
    }
  };

  const removeVote = (typeVote) => {
    requestDeletePostVote(id, getPosts);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  const showVoteButtons = props.isFeed && (
    <section>
      {userVote && isDownVoted ? (
        <Button
          variant="outlined"
          sx={{ fontFamily: "monospace" }}
          onClick={() => removeVote("down")}
        >
          Desfazer Dislike
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
          Desfazer Like{" "}
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
          <CardMedia
            component="img"
            height="300"
            image={"https://picsum.photos/200/200?random=" + id}
            alt="Imagem aleatória do post"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="section"
              sx={{ fontWeight: "bold", fontFamily: "monospace" }}
            >
              {title}
            </Typography>
            <Typography>
              <b>Postado por:</b> {userId}
              <p><b>Criado em:</b>{date}</p>
              <p><b>Descrição:</b> {body}</p>
              <p><b>Votos:</b> {voteSum ? voteSum : 0}</p>
            </Typography>
            {showVoteButtons}

            <Typography sx={{ m: 2 }}>
              <b>Comentários:</b> {commentCount ? commentCount : 0}
            </Typography>
            {props.isFeed && (
              <Button
                variant="contained"
                sx={{ fontFamily: "monospace", bgcolor: "#f57c00" }}
                onClick={goToComments}
              >
                Ver comentários
              </Button>
            )}
          </CardContent>
        </Card>
      </Box>
    </article>
  );
}
