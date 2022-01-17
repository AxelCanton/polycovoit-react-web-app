import { IAskedReservationOptionalProps, IAskedReservationProps } from "./reservation.type";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Collapse, Fade, Grid } from "@mui/material";
import { useState } from "react";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import PolytechIcon from "../PolytechIcon/PolytechIcon";

const defaultProps : IAskedReservationOptionalProps = {
    disabled: false
}

const AskedReservation = ({reservation, disabled}: IAskedReservationProps) => {

    const [expanded, setExpended] = useState(false);

    function seeInfos(){
        setExpended(!expanded);
    }

    return(
        <>
            <Card sx={disabled? {opacity: 0.7,marginBottom: 5}:{marginBottom: 5}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Typography variant="h5">
                                Demande {reservation.accepted === 0? " en attente":(reservation.accepted === 1? (" acceptée par " + reservation.receivingUser!.firstName+" " + reservation.receivingUser!.lastName) : " refusée")}
                            </Typography>
                        </Grid> 
                        <Grid item xs={2}>
                            <Button onClick={seeInfos}>
                                Voir plus     
                            </Button>
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
                                        <EventIcon color="secondary"/>
                                    </Grid>
                                    <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                        <Typography>
                                            Date : {new Date(reservation.date).toLocaleDateString()}
                                        </Typography>
                                    </Grid>
                                <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                                    {reservation.accepted === 1? <AlternateEmailIcon color="secondary"/> :null}
                                </Grid>
                                <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start">
                                    <Typography>
                                        {reservation.accepted === 1? "Email : "+reservation.receivingUser!.email:null}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Fade in={!expanded}>
                            <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                            {reservation.accepted === 1? (
                                <CheckCircleOutlineOutlinedIcon fontSize="large" color="success"/>
                                ):(
                                    reservation.accepted === 0? (
                                        <HourglassBottomOutlinedIcon fontSize="large" color="info" />
                                    ):(
                                        <CancelOutlinedIcon fontSize="large" color="error"/>
                                    ))}
                            </Grid>
                        </Fade>
                    </Grid>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={10.5}>
                                <Grid container spacing={1}>
                                    <Grid container xs={1} direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:1}}>
                                        <LocationCityIcon color="secondary"/> 
                                    </Grid>
                                    <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                        <Typography>
                                            Genre : {reservation.receivingUser!.gender}
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={1} direction="column" justifyContent="center" alignItems="center" sx={{marginBottom:1}}>
                                        <PolytechIcon speciality={reservation.receivingUser!.speciality}/> 
                                    </Grid>
                                    <Grid container xs={11} direction="column" justifyContent="center" alignItems="flex-start" sx={{marginBottom:1}}>
                                        <Typography>
                                            Specialité : {reservation.receivingUser!.speciality}
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                                        <MessageOutlinedIcon color="secondary"/>
                                    </Grid>
                                    <Grid container xs={10.5} direction="column" justifyContent="center" alignItems="flex-start">
                                        <Typography>
                                            Message : {reservation.message}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                                <Fade in={expanded}>
                                        <Grid container xs={1} direction="column" justifyContent="center" alignItems="center">
                                        {reservation.accepted === 1? (
                                            <CheckCircleOutlineOutlinedIcon color="success" sx={{fontSize: 45}}/>
                                            ):(
                                                reservation.accepted === 0? (
                                                    <HourglassBottomOutlinedIcon fontSize="large" color="info" sx={{fontSize: 45}}/>
                                                ):(
                                                    <CancelOutlinedIcon fontSize="large" color="error" sx={{fontSize: 45}}/>
                                                ))}
                                        </Grid>
                                </Fade>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </>
        
    )
}

AskedReservation.defaultProps = defaultProps;

export default AskedReservation;