import { IAskedReservationProps } from "./askedReservation.type";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AskedReservation = ({reservation}: IAskedReservationProps) => {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">
                    Reservation for
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AskedReservation;