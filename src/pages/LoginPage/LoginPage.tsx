import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LoginForm from "../../components/Login/LoginForm";
import { loginThunk } from "../../thunks/LoginThunk";

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.loginReducer.isAuth);
    
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
        <LoginForm onLoginClick={onLoginClick} />
    );
}

export default LoginPage;