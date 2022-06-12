import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import { AppBar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function Header(props) {
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Tem certeza de que deseja sair?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      goToLoginPage(navigate);
      alert("Até a próxima!");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#0d47a1" }}>
        <header>
          <Typography
            sx={{
              margin: 2,
              textAlign: "left",
              fontSize: 50,
              fontWeight: 700,
              color: "warning.main",
              letterSpacing: 10,
              fontFamily:"monospace"
            }}
          >
            labeddit
          </Typography>
          {props.isProtected && (
            <section>
              <Typography
                sx={{
                  margin: 2,
                  fontSize: 20,
                  fontWeight: 100,
                  color: "#fb8c00",
                }}
              >
                Boas vindas, {localStorage.getItem("userEmail")}!
              </Typography>
              <Button
                onClick={logout}
                variant="outlined"
                size="small"
                sx={{ margin: 2, bgcolor: "whitesmoke", color: "#bdbdbd" }}
              >
                Sair
              </Button>
            </section>
          )}
        </header>
      </AppBar>
    </Box>
  );
}
