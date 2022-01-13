import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { IAuthVerifComponentProps } from "./authVerifComponent.type";

const AuthVerifComponent = ({
    children
}: IAuthVerifComponentProps) => {
    const isAuth = useAppSelector((state) => state.loginReducer.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);
    
    return (<>{children}</>);
}

export default AuthVerifComponent;