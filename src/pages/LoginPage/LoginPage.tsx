import { useAppDispatch } from "../../app/hooks";
import LoginForm from "../../components/Login/LoginForm";
import { loginThunk } from "../../thunks/LoginThunk";

const LoginPage = () => {
    const dispatch = useAppDispatch()

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