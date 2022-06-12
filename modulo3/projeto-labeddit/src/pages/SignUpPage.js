import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToLoginPage } from "../routes/coordinator";
import { requestSignUp } from "../services/requests";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import {Avatar, Button, CssBaseline, Grid, TextField,Typography} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function SignUpPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const signup = (event) => {
    event.preventDefault();

    requestSignUp(form, clear, navigate);
  };

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
      <Header isProtected={false} />
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
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <AccountCircleOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{fontWeight:"bold"}}>
              Cadastrar Novo Usuário
            </Typography>

            <Box component="form" noValidate onSubmit={signup} sx={{ mt: 3 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"Seu nome deve ter no mínimo 3 caracteres"}
                    label={"Seu nome"}
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Seu E-mail"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={
                      "O nome deve ter no mínimo 8 e no máximo 30 caracteres"
                    }
                    label={"Sua Senha"}
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 4, mb: 3 }}
                >
                  Cadastrar!
                </Button>
                <Button
                  type="onClick"
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: "secondary.main", color: "primary.main" }}
                  onClick={() => goToLoginPage(navigate)}
                >
                  Voltar
                </Button>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </main>
  );
}
