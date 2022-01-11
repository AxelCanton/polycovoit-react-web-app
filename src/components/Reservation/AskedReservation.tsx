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

const defaultProps : IAskedReservationOptionalProps = {
    disabled: false
}

const gridText = {
    margin: 0.5
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
                                <Grid item xs={1}>
                                    {reservation.accepted === 1? <AlternateEmailIcon color="secondary"/> :null}
                                </Grid>
                                <Grid item xs={10} sx={gridText}>
                                    <Typography>
                                        {reservation.accepted === 1? "Email : "+reservation.receivingUser!.email:null}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Fade in={!expanded}>
                            <Grid item xs={1}>
                            {reservation.accepted === 1? (
                                <CheckCircleOutlineOutlinedIcon fontSize="large" color="success" sx={{marginTop:3}}/>
                                ):(
                                    reservation.accepted === 0? (
                                        <HourglassBottomOutlinedIcon fontSize="large" color="info" sx={{marginTop:3}}/>
                                    ):(
                                        <CancelOutlinedIcon fontSize="large" color="error" sx={{marginTop:3}}/>
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
                                    <Grid item xs={1}>
                                        <LocationCityIcon color="secondary"/> 
                                    </Grid>
                                    <Grid item xs={10} sx={gridText}>
                                        <Typography>
                                            Genre : {reservation.receivingUser!.gender}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <SchoolOutlinedIcon color="secondary"/>
                                    </Grid>
                                    <Grid item xs={10} sx={gridText}>
                                        <Typography>
                                            Specialité : {reservation.receivingUser!.speciality.specialityName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <MessageOutlinedIcon color="secondary"/>
                                    </Grid>
                                    <Grid item xs={9.5} sx={gridText}>
                                        <Typography>
                                            Message : {reservation.message}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                                <Fade in={expanded}>
                                        <Grid item xs={1}>
                                        {reservation.accepted === 1? (
                                            <CheckCircleOutlineOutlinedIcon color="success" sx={{marginTop:3,fontSize: 45}}/>
                                            ):(
                                                reservation.accepted === 0? (
                                                    <HourglassBottomOutlinedIcon fontSize="large" color="info" sx={{marginTop:3,fontSize: 45}}/>
                                                ):(
                                                    <CancelOutlinedIcon fontSize="large" color="error" sx={{marginTop:3,fontSize: 45}}/>
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