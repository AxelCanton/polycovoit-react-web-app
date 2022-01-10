import { IAskedReservationProps } from "./reservation.type";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Collapse, Grid } from "@mui/material";
import { useState } from "react";

const AskedReservation = ({reservation}: IAskedReservationProps) => {

    const [expanded, setExpended] = useState(false);

    function seeInfos(){
        setExpended(!expanded);
    }

    return(
        <Card>
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
                    <Grid item xs={8}>
                    <Typography>
                        Code postal : {reservation.postalCode}
                        <br/>
                        {reservation.accepted === 1? "Mail : "+reservation.receivingUser!.email:null}
                    </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        Sexe : {reservation.receivingUser!.gender}
                        <br/>
                        Date : {new Date(reservation.date).toLocaleDateString()}
                        <br/>
                        Message : {reservation.message}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default AskedReservation;