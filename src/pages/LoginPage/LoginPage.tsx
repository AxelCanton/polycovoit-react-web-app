import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LoginForm from "../../components/Login/LoginForm";
import MapComponent from "../../components/MapComponent/MapComponent";
import Modal from "../../components/Modal/Modal";
import { ILatLng } from "../../interfaces/location.interface";
import { loginThunk } from "../../thunks/LoginThunk";

const INITIAL_POSITION: ILatLng = {
    latitude: 46,
    longitude: 3
}
const INITIAL_ZOOM = 6;

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { isAuth, isLoading } = useAppSelector((state) => state.loginReducer);
    
    useEffect(() => {
        if(isAuth) {
            navigate('/map')
        }
    }, [isAuth, navigate]);

    const onLoginClick = (email: string, password: string) => {
        dispatch(loginThunk({
            email,
            password
        }))
    }

    return (
        <>
            <Box sx={{position: 'relative'}}>
                <MapComponent
                initialPosition={INITIAL_POSITION}
                initialZoom={INITIAL_ZOOM}
                markersData={[]}
                height='93vh'
                />
            </Box>
            <Modal isVisible={true} close={() => {}}>
                <LoginForm isLoading={isLoading} onLoginClick={onLoginClick} />
            </Modal>
        </>
    );
}

export default LoginPage;