import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToSignUpPage } from "../routes/coordinator";
import { requestLogin } from "../services/requests";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField'
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { blue, orange } from "@mui/material/colors";



export default function LoginPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({ email: "", password: "" });

  const login = (event) => {
    event.preventDefault();

    requestLogin(form, clear, navigate);
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary.main" sx={{fontWeight:"bold"} }>
            Login
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="email"
              label="Seu E-mail:"
              name="email"
              autoComplete="email"
              fullWidth
              value={form.email}
              onChange={onChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Sua Senha: "
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar Usuário"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            
            <Typography color="secondary.main" fontSize={20} > Ainda não tem conta? Sem Problemas!</Typography>             
              <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:"secondary.main", color:"primary.main"}}
              onClick={() => goToSignUpPage(navigate)}>
              Cadastre-se aqui </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </main>
  );
  
}
  