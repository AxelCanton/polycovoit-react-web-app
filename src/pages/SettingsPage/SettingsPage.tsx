import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import { fetchUserThunk } from "../../thunks/UserThunk";
import AccountDeletion from "./AccountDeletion/AccountDeletion";
import ModalAddLocation from "./ModalAddLocation/ModalAddLocation";

const SettingsPage = () => {
    const [locationFormVisible, setLocationFormVisible] = useState(false);

    const dispatch = useAppDispatch();
    const { decodedToken, isAuth } = useAppSelector((state) => state.loginReducer);

    useEffect(() => {
        if (decodedToken) {
            dispatch(fetchUserThunk(decodedToken.sub))
        }
    }, [dispatch, decodedToken]);

    const showLocationForm = () => setLocationFormVisible(true);


    // Deleting an account reset the login state, so we don't want to render the component if that case
    return isAuth ? (
        <>
        <Button onClick={showLocationForm}>Ajouter une addresse</Button>
        <AccountDeletion id={decodedToken.sub}/>
        <ModalAddLocation isVisible={locationFormVisible} setIsVisible={setLocationFormVisible}/>
        </>
    ) : <></>;
}

export default SettingsPage;