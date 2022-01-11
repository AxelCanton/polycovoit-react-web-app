import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { answerReservationThunk } from "../../thunks/ReservationThunk";
import { IWaitingReservationProps } from "./reservation.type";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';


const gridText = {
    margin: 0.5
}


const WaitingReservation = (
    {reservation}: IWaitingReservationProps
) => {

    const dispatch = useAppDispatch();
    
    function answerReservation(answer: boolean):void {
        dispatch(answerReservationThunk(reservation.id, answer))
    }
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant="h5">
                            Demande de {reservation.askingUser!.firstName+" "+reservation.askingUser!.lastName}
                        </Typography>
                    </Grid> 
                    <Grid item xs={10.5}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                                <LocationCityIcon color="secondary"/> 
                            </Grid>
                            <Grid item xs={10} sx={gridText}>
                                <Typography>
                                    Code postal : {reservation.postalCode}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                    <EventIcon color="secondary"/>
                            </Grid>
                            <Grid item xs={10} sx={gridText}>
                                <Typography>
                                    Date : {new Date(reservation.date).toLocaleDateString()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Date : {new Date(reservation.date).toLocaleDateString()}
                            <br/>
                            Message : {reservation.message}
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                            <Button onClick={() => answerReservation(true)}>
                                Accepter
                            </Button>
                            <Button onClick={() => answerReservation(false)}>
                                Refuser
                            </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default WaitingReservation;