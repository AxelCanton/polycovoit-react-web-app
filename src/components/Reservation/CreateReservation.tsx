import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import {Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import FormLayout from "../Layout/FormLayout/FormLayout";
import { ICreateReservationOptionalProps, ICreateReservationProps } from "./reservation.type";
import Button from "../Button/Button";

const defaultProps: ICreateReservationOptionalProps = {
    isLoading: false
}

const CreateReservation = ({
    isLoading,
    location,
    onValidate
}: ICreateReservationProps) => {

    const [date, setDate] = useState<Date | null>(new Date());
    const [message, setMessage] = useState<string>("");
    
    const formTitle:string = "Demande de reservation pour le code postal " + location!.postalCode;

    const disableValidate = message === "" || date === null;

    const validate = () => onValidate(location.id, message, date as Date);

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
        <FormLayout title={formTitle} children={formContent()} footer={<Button isLoading={isLoading} onClick={validate} disabled={disableValidate}>Valider la demande</Button>} />
    )
}

CreateReservation.defaultProps = defaultProps;

export default CreateReservation;