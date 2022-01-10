import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { answerReservationThunk } from "../../thunks/ReservationThunk";
import { IWaitingReservationProps } from "./reservation.type";

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
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Demande de {reservation.askingUser!.firstName+" "+reservation.askingUser!.lastName}
                        </Typography>
                    </Grid> 
                    <Grid item xs={12}>
                        <Typography>
                            Pour le code postal : {reservation.postalCode}
                            <br/>
                            Sexe : {reservation.askingUser!.gender}
                        </Typography>
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