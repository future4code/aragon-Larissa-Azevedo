import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import GlobalStateContext from "../global/GlobalStateContext";
import useForm from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { requestCreatePost } from "../services/requests";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { blue, orange } from "@mui/material/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import loading from "../loading.gif"


export default function FeedPage() {
  useProtectedPage();

  const { form, onChange, clear } = useForm({ title: "", body: "" });

  const { states, setters, getters } = useContext(GlobalStateContext);

  const { posts, page, isLoading } = states;

  const { setPage } = setters;

  const { getPosts } = getters;

  useEffect(() => {
    getPosts(page);
  }, []);

  const createPost = (event) => {
    event.preventDefault();

    requestCreatePost(form, clear, getPosts);
  };

  const changePage = (sum) => {
    const nextPage = page + sum;

    setPage(nextPage);
    getPosts(nextPage);
  };

  const showPosts =
    posts.length &&
    posts.map((post) => {
      return <PostCard key={post.id} post={post} isFeed={true} />;
    });
  
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
      
      <section>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5" color="secondary" sx={{
            letterSpacing: 10,
            fontFamily: "monospace",
            color: "primary.main",
            fontWeight:"bold"}}>
                Crie seu Post!
              </Typography>
              <Box
                component="form"
                onSubmit={createPost}
                noValidate
                sx={{ mt: 1 }}                
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id={"title"}
                  name={"title"}
                  label={"Título:"}
                  value={form.title}
                  onChange={onChange}
                  pattern={"^.{5,}$"}
                  title={"Título deve ter no mínimo 5 caracteres"}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id={"body"}
                  name={"body"}
                  label={"Descrição:"}
                  type={"text"}
                  value={form.body}
                  onChange={onChange}
                  pattern={"^.{10,}$"}
                  title={"Post deve ter no mínimo 5 caracteres"}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontFamily: "monospace" }}
                >
                  Postar
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </section>     
      <section>
        <Typography component="h1" variant="h5" color="secondary" sx={{ 
            m:6,
            letterSpacing: 6,
            fontFamily: "monospace",
            color: "primary.main",
            fontWeight:"bold"}}> Lista de Posts </Typography>

        <nav>
          {page !== 1 && (
            <Button onClick={() => changePage(-1)}> <ArrowBackIcon/> </Button>
          )}
           <Typography sx={{ fontFamily: "monospace" }}> Página {page} </Typography> 
          {posts.length && (
            <Button onClick={() => changePage(1)}> <ArrowForwardIcon/> </Button>
          )}
        </nav>
      
        {isLoading ? <img src={loading} alt={"carregando"}/> : showPosts}

      </section>
    </main>
  );
}
