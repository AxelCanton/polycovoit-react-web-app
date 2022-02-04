// @ts-nocheck

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import LoginForm from "../../../components/Login/LoginForm";
import { loginThunk } from "../../../thunks/LoginThunk";
import Modal from '../../../components/Modal/Modal'
import RegistrationPage from "../../RegistrationPage/RegistrationPage";
import { useEffect, useState } from "react";

const STEP1 = 0;
const STEP2 = 1;

const Login = () => {
    const { isAuth, isValid, isLoading } = useAppSelector((state) => state.loginReducer);

    const initialStep = isAuth ? STEP2 : STEP1;
    const [step, setStep] = useState(initialStep);
    const showModal = !isAuth || !isValid
    
    const dispatch = useAppDispatch();

    const onLoginClick = (email: string, password: string) => {
        dispatch(loginThunk({
            email,
            password
        }))
    };

    useEffect(() => {
        if(!isAuth) {
            setStep(STEP1);
        } else if(!isValid) {
            setStep(STEP2);
        }
    }, [isAuth, isValid]);

    return (
        <Modal isVisible={showModal} iconButton={false} close={() => {}}>
            {step === STEP1 && <LoginForm isLoading={isLoading} onLoginClick={onLoginClick} />}
            {step === STEP2 && <RegistrationPage/>}
        </Modal>
    );
}

export default Login;