import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header(props){
    return(
        <header>
             <Typography component="div">
                 <Box 
                 sx={{ letterSpacing: 10, m: 1,
                    fontWeight:'700', 
                    color:'#880e4f', 
                    fontFamily:'BlinkMacSystemFont',
                    textTransform:'uppercase'              
                }}><h1>★ AstroMatch ★</h1></Box>
             </Typography>

            {props.page === "profile" ? 
            <Button sx={{p:2, m:2, height:5}}variant="contained" color="secondary" onClick={props.goToMatchPage}>Ver Matches</Button> :
            <Button sx={{p:2, m:2, height:5}}color="secondary" onClick={props.goToProfilePage}>Voltar para Perfis</Button>
            }
        </header>
    );
};