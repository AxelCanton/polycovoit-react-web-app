import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { IAuthVerifComponentProps } from "./authVerifComponent.type";

const AuthVerifComponent = ({
    children
}: IAuthVerifComponentProps) => {
    const {isAuth} = useAppSelector((state) => state.loginReducer);

    const isValid = localStorage.getItem('isValid') === 'true'? true : false;
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            navigate('/');
        } else {
            console.log(isValid);
            if(!isValid){
                navigate('/map')
            }
        }
    }, [isAuth,isValid, navigate]);
    
    return (<>{children}</>);
}

export default AuthVerifComponent;