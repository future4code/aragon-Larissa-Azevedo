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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import { Button, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import loading from "../loading.gif"

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
      return (
      <CommentCard 
      key={comment.id} 
      comment={comment}
      />
      )
}) : (
    <Typography component="h3" variant="h7"
    sx={{
      letterSpacing: 4,
      m:3,
      fontFamily: "monospace",
      color: "warning.main" }}> 
      Seja a primeira a pessoa a comentar!</Typography>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[700],
      },
      secondary: {
        main: blue[900],
      },
    },
  });

  return (
    <main>
      <Header isProtected={true} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              margin: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                letterSpacing: 10,
                fontFamily: "monospace",
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              Detalhes do Post
            </Typography>

            <PostCard 
            key={post.id} 
            post={post} 
            isFeed={false} />

            <Box
              component="form"
              noValidate
              onSubmit={createComment}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"body"}
                    type={"text"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"Mínimo de 5 caracteres"}
                    label={"Digite seu comentário"}
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 3, fontFamily:"monospace" }}
                >
                  Comentar
                </Button>
              </Grid>
              <Button
                variant="outlined"
                sx={{ mt: 2, mb: 2, fontFamily:"monospace"}}
                onClick={() => navigate(-1)}
              >
                Voltar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <section>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            letterSpacing: 10,
            fontFamily: "monospace",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Comentários
        </Typography>
        {isLoading ?  <img src={loading} alt={"carregando"}/> : showComments}
      </section>
    </main>
  );
}
