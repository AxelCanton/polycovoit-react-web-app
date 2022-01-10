import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import {Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ILocation } from "../../interfaces/location.interface";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import FormLayout from "../Layout/FormLayout/FormLayout";
import { ICreateReservationProps } from "./reservation.type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../Button/Button";
import { createReservationThunk } from "../../thunks/ReservationThunk";
import { SUCCESS_CREATE_MESSAGE } from "../../thunks/LocationsThunk";

const CreateReservation = ({location, closeModal}: ICreateReservationProps) => {

    const [date, setDate] = useState<Date | null>(new Date())
    const [message, setMessage] = useState<string>("")

    const dispatch = useAppDispatch();
    const { isLoading, resultMessage } = useAppSelector((state) => state.reservationReducer);
    
    const formTitle:string = "Demande de reservation pour le code postal " + location!.postalCode;


    const validate = () => {
        if(date && date.toString() !== "Invalid Date" && message !== "" && location){
            dispatch(createReservationThunk(location.id, message, date))
            if(resultMessage === SUCCESS_CREATE_MESSAGE){
                closeModal();
            }
        } else {
            //TODO :: gestion d'erreur
        }
        
    }

    function formContent():JSX.Element{
        return(
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Typography>Entrez la date de reservation : </Typography> 
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                        label="Choisissez une date"
                        value={date}
                        minDate={new Date()}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />           
                    </LocalizationProvider> 
                </Grid>
                <Grid item xs={6}>
                    <Typography>Entrez un message : </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Message"
                        value={message}
                        multiline
                        fullWidth
                        onChange={(newValue) => {setMessage(newValue.target.value)}}
                    />
                </Grid>
            </Grid>
        )
    }
    return (
        <FormLayout title={formTitle} children={formContent()} footer={<Button isLoading={isLoading} onClick={validate} disabled={message===""?true:false}>Valider la demande</Button>} />
    )
}

export default CreateReservation;