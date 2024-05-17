import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const titleStyle = (title, titleType) => (
  <Typography
  variant= {titleType}
  align= 'center'
  paragraph="true"
  sx={{
    mr: 2,
    fontFamily: 'monospace',
    letterSpacing: '.2rem',
    fontWeight: '700',
    color: 'inherit',
    textDecoration: 'none',
  }}
  >
    {title}   
  </Typography>
)

function Logout() {

    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    // console.log(loggedUser);

    return (
        <div>
        <Container style={{marginTop: "90px"}}>
            {titleStyle("Are you sure you want to logout?".toUpperCase(), "h4")}
        </Container>
        <div align='center' style={{paddingBottom: "300px", paddingTop:"60px"}}>
            <Button 
                variant="contained"  
                style={{ background: "#194D33", marginRight: "20px", width: "100px" }} 
                onClick= { () => {
                    setLoggedUser({ username: '', isAdmin: false })
                    console.log(loggedUser)
                }}
            >
                Yes
            </Button>
            <Button 
                variant="contained"  
                style={{ background: "#194D33", width: "100px" }} 
                onClick= { () => {
                    navigate('/products');
                }
                }
            >
                No
            </Button>
            </div>
        </div>

  );
}

export default Logout;
