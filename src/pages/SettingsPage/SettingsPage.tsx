import { Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import Fade from "../../components/Transitions/Fade/Fade";
import { SUCCESS_CREATE_MESSAGE, SUCCESS_DELETE_MESSAGE } from "../../thunks/LocationsThunk";
import { fetchUserThunk } from "../../thunks/UserThunk";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import AccountDeletion from "./AccountDeletion/AccountDeletion";
import AddLocation from "./AddLocation/AddLocation";
import Locations from "./Locations/Locations";
import ModalAddLocation from "./ModalAddLocation/ModalAddLocation";

const SettingsPage = () => {
    const dispatch = useAppDispatch();
    const { decodedToken, isAuth } = useAppSelector((state) => state.loginReducer);
    const { message } = useAppSelector((state) => state.locationsReducer);

    const getUserData = useCallback(() => dispatch(fetchUserThunk(decodedToken.sub)), [decodedToken, dispatch]);
    
    useEffect(() => {
        if (decodedToken) {
            getUserData();
        }
    }, [dispatch, decodedToken, message, getUserData]);

    // On location creation, retrieve user data in order to update the location list
    useEffect(() => {
        if (message === SUCCESS_CREATE_MESSAGE || message === SUCCESS_DELETE_MESSAGE) {
            getUserData();
        }
    }, [getUserData, message]);


    // Deleting an account reset the login state, so we don't want to render the component if that case
    return isAuth ? (
        <Fade>
            <CenteredLayout>
                <Typography variant={TypographyVariantEnum.h2}>Paramètres</Typography>
            </CenteredLayout>
            <CenteredLayout>
                <AddLocation />
            </CenteredLayout>
            <CustomDivider/>
            <CenteredLayout>
                <Locations />
            </CenteredLayout>
            <CustomDivider/>
            <CenteredLayout>
                <AccountDeletion id={decodedToken.sub}/>
            </CenteredLayout>
        </Fade>
        ) : <></>;
}

export default SettingsPage;