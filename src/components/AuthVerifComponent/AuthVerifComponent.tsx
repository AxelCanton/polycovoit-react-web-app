import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { IAuthVerifComponentProps } from "./authVerifComponent.type";

const AuthVerifComponent = ({
    children
}: IAuthVerifComponentProps) => {
    const { isAuth, isValid } = useAppSelector((state) => state.loginReducer);
    const navigate = useNavigate();

    useEffect(() => {
        const authorizedUserCond = isAuth && isValid;
        if(!authorizedUserCond) {
            navigate('/');
        }
    }, [isAuth,isValid, navigate]);
    
    return (<>{children}</>);
}

export default AuthVerifComponent;