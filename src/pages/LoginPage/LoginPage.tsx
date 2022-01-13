import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LoginForm from "../../components/Login/LoginForm";
import Fade from "../../components/Transitions/Fade/Fade";
import { loginThunk } from "../../thunks/LoginThunk";

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { isAuth, isLoading } = useAppSelector((state) => state.loginReducer);
    
    useEffect(() => {
        if(isAuth) {
            navigate('/map');
        }
    }, [isAuth, navigate]);

    const onLoginClick = (email: string, password: string) => {
        dispatch(loginThunk({
            email,
            password
        }))
    }

    return (
        <Fade>
            <Grid
                container
                direction="column"
                alignItems="center"
                sx={{ marginTop: 20, minHeight: '100vh' }}
                >
                <Grid item xs={3}>
                    <LoginForm isLoading={isLoading} onLoginClick={onLoginClick} />
                </Grid>
            </Grid>
        </Fade>
    );
}

export default LoginPage;