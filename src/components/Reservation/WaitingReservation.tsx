import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { IWaitingReservationProps } from "./reservation.type";

const WaitingReservation = (
    {reservation}: IWaitingReservationProps
) => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Demande de {reservation.askingUser}
                        </Typography>
                    </Grid> 
                    <Grid item xs={12}>
                        <Typography>
                            Pour le code postal : {reservation.postalCode}
                            <br/>
                            Message : {reservation.message}
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                            <Button>
                                Accepter
                            </Button>
                            <Button>
                                Refuser
                            </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default WaitingReservation;