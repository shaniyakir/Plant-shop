import BazarButton from "../components/BazarButton";
import FlexBox from "../components/FlexBox";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { Link as RouterLink} from 'react-router-dom';
import IconButton from "@mui/material/Icon";
import styled from '@mui/material/styles/styled';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useEffect, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from "../contexts/UserContext";



const StyledCard = styled(({
   children,
   passwordVisibility,
   ...rest
}) => <Card {...rest}>{children}</Card>)(({
    theme,
    passwordVisibility
}) => ({
    width: 500,
    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
    ".content": {
        textAlign: "center",
        padding: "3rem 3.75rem 0px",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 2rem 0px"
        }
    },
    ".passwordEye": {
        color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
    },
    ".agreement": {
        marginTop: 12,
        marginBottom: 24
    },
    ".alert": {
        marginBottom: 24
    }
}));


const Register = () => {

    const navigate = useNavigate();

    const [loggedUser, setLoggedUser] = useContext(UserContext);

    const [nameExists, setNameExists] = useState(false);
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleUsernamedChange = (event) => {
        setUserName(event.target.value);
    }

    const [users, setUsers] = useState([]); 
    
    useEffect(() => {
        const loadAllUsers = async () => {
          try {
            await fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(res => {
              setUsers(res.users);
          })
          } catch (err) {
            console.log(err)
          }
        }
        loadAllUsers();
      },[])

    const createAccount = () => {
        const userNameExists = users.find(item => {
            return item.user === userName
        })
        if (userNameExists) {
            setNameExists(true);
        } else {
            let route = 'http://localhost:9000/users/registerUser'; 
            const reqData = {
                "userName": userName,
                "userPassword": password
            };
            fetch(route, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqData),
                }).then(res => res.json())
                    .then(res => {
                    console.log(res)
            })
            setLoggedUser({ username: userName, isAdmin: userName === 'admin' })
            navigate('/products');
        }
        }

        const NotifyError = ({setLoginFailed}) => {
            return (
                <Box sx={{width: '100%'}}>
                    <Alert
                        className="alert"
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setNameExists(false);
                                }}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        }
                    >
                        User Name already exists, choose a different one
                    </Alert>
                </Box>
            );
        }

    return (

        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingBottom: '50px', marginTop: '50px' }}
       >

        <StyledCard elevation={3}>
                {nameExists && <NotifyError setNameExists={setNameExists} />}
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column',
                        paddingBottom: '22px',
                    }}
                >
                    <Box>Create an account and become part of the Planty family</Box>
                </FlexBox>    

                <TextField
                    mb={2}
                    name="name"
                    label="Name"
                    placeholder="your name"
                    variant="outlined"
                    size="small"

                    style={{ marginLeft:"50px", marginRight:"50px", width:"400px"}}
                    onChange={handleUsernamedChange}
                    value={userName}
                />

                <TextField
                    mb={2}
                    name="password"
                    label="Password"
                    placeholder="*********"
                    autoComplete="on"
                    type="password"
                    variant="outlined"
                    size="small"
                    style={{ marginTop:"15px" , marginLeft:"50px", marginRight:"50px", width:"400px"}}
                    value={password}
                    onChange={handlePasswordChange}
                />
    
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <Box>By continuing you agress to Planty's</Box>
                    <Link
                        component={RouterLink}
                        to="/login"
                    >
                        <a href={'/terms'}>terms of use</a>
                    </Link>
                </FlexBox>

                <BazarButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth sx={{
                        mb: "1.65rem",
                        height: 44
                    }}
                    onClick={createAccount}
                    style={{ marginTop:"15px" , marginLeft:"50px", marginRight:"50px", width:"400px"}}
                >
                    Create account
                </BazarButton>

                 <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <Box>Already have an account?&nbsp;</Box>
                    <Link
                        component={RouterLink}
                        to="/login"
                    >
                        <h6>
                            Log in
                        </h6>
                    </Link>
                </FlexBox>
        </StyledCard>
        </Grid>
    )
};

export default Register;
