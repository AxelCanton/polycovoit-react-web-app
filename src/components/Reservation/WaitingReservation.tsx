import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { answerReservationThunk } from "../../thunks/ReservationThunk";
import { IWaitingReservationProps } from "./reservation.type";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PolytechIcon from "../PolytechIcon/PolytechIcon";


const gridText = {
}


const WaitingReservation = (
    {reservation}: IWaitingReservationProps
) => {

    const dispatch = useAppDispatch();
    
    function answerReservation(answer: boolean):void {
        dispatch(answerReservationThunk(reservation.id, answer))
    }
    return (
        <Card sx={{marginBottom: 5}}>
            <CardContent>
                <Grid container spacing={5}>
                    <Grid item xs={10}>
                        <Typography variant="h5">
                            Demande de {reservation.askingUser!.firstName+" "+reservation.askingUser!.lastName}
                        </Typography>
                    </Grid> 
                    <Grid item xs={10.5}>
                        <Grid container spacing={1}>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:1}}>
                                <LocationCityIcon color="secondary"/> 
                            </Grid>
                            <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                <Typography>
                                    Code postal : {reservation.postalCode}
                                </Typography>
                            </Grid>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:1}}>
                                <PolytechIcon speciality={reservation.askingUser!.speciality}/> 
                            </Grid>
                            <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                <Typography>
                                    Spécialité : {reservation.askingUser!.speciality}
                                </Typography>
                            </Grid>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                                    <AlternateEmailIcon color="secondary"/>
                            </Grid>
                            <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start">
                                <Typography>
                                    Mail : {reservation.askingUser!.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10.5}>
                        <Grid container spacing={1}>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:1}}>
                                <EventIcon color="secondary"/> 
                            </Grid>
                            <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                <Typography>
                                Date : {new Date(reservation.date).toLocaleDateString()}
                                </Typography>
                            </Grid>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                                    <MessageOutlinedIcon color="secondary"/>
                            </Grid>
                            <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start">
                                <Typography>
                                    Message : {reservation.message}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{marginTop:3}}>
                        <Grid container spacing={2} justifyContent="center">
                            <Button onClick={() => answerReservation(true)} color="success" sx={{marginRight:2}}>
                                Accepter
                            </Button>
                            <Button onClick={() => answerReservation(false)} color="error" sx={{marginLeft:2}}>
                                Refuser
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default WaitingReservation;