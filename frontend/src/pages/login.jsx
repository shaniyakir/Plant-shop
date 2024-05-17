import React from 'react'
import BazarButton from "../components/BazarButton";
import FlexBox from "../components/FlexBox";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';
import IconButton from "@mui/material/Icon";
import styled from '@mui/material/styles/styled';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const NotifyError = ({ setLoginFailed }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Alert
                className="alert"
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setLoginFailed(false);
                        }}>
                        <CloseIcon></CloseIcon>
                    </IconButton>
                }
            >
                Incorrect name or password
            </Alert>
        </Box>
    );
}


const Login = () => {

    const [rememberMe, setRememberMe] = useState(false);
    const [loggedUser, setLoggedUser] = React.useContext(UserContext);

    const handleChange = () => {
        if (rememberMe) {
            setRememberMe(false);
        } else {
            setRememberMe(true);
        }
        return
    }

    const [loginFailed, setLoginFailed] = useState(false);
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleUsernamedChange = (event) => {
        setUserName(event.target.value);
    }


    const onLogin = () => {
            let route = 'http://localhost:9000/users/login';
            let data = {
                password,
                userName,
                rememberMe,
            };
            fetch(route, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(data),
            }).then(res => res.json())
                .then(res => {
                    if (res.success === true) {
                        setLoggedUser({ username: res.username, isAdmin: res.username === 'admin' })
                        navigate('/products')
                    } else {
                        setLoginFailed(true);
                    }
                })
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
                {loginFailed && <NotifyError setLoginFailed={setLoginFailed} />}
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column',
                        paddingBottom: '22px',
                    }}
                >
                    <Box>Log in and let's get started</Box>
                </FlexBox>

                <TextField
                    mb={2}
                    name="user"
                    label="Name"
                    placeholder="your name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginLeft: "50px", marginRight: "50px", width: "400px" }}
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
                    fullWidth
                    style={{ marginTop: "15px", marginLeft: "50px", marginRight: "50px", width: "400px" }}
                    value={password}
                    onChange={handlePasswordChange}
                />

                <FormGroup style={{ marginLeft: "50px", marginTop: "15px" }}>
                    <FormControlLabel control={<Checkbox />} onChange={handleChange} label="Remember Me?" />
                </FormGroup>

                <BazarButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginLeft: "50px", marginRight: "50px", marginTop: "25px", width: "400px" }}
                    fullWidth sx={{
                        mb: "1.65rem",
                        height: 44
                    }}
                    onClick={onLogin}
                >
                    Submit
                </BazarButton>
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <Box>Don’t have account?&nbsp;</Box>
                    <Link
                        component={RouterLink}
                        to="/register"
                    >
                        <h6>
                            &nbsp;Sign Up
                        </h6>
                    </Link>
                </FlexBox>
            </StyledCard>
        </Grid>
    )
};

export default Login;
