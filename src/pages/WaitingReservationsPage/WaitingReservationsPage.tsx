import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import WaitingReservation from "../../components/Reservation/WaitingReservation";
import { waitingReservationFetch } from "../../thunks/ReservationThunk";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import Fade from "../../components/Transitions/Fade/Fade";

const WaitingReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(waitingReservationFetch())
    }, [dispatch])

    const reservationsToDisplay = ():(JSX.Element | null | undefined)[] => {
        return (
            reservations.map((reservation) => {
                if(reservation.accepted === 0){
                    return <WaitingReservation reservation={reservation} key={reservation.id}></WaitingReservation>
                } else {
                    return null;
                }
            })
        )
    }

    function isNull(list:(JSX.Element | null | undefined)[]):boolean {
        let res = true;
        for(let i in list) {
            if(list[i] !== null){
                res = false;
            }
        }

        return res;
    }

    const reservations = useAppSelector((state) => state.reservationReducer.waitingReservations);
        return (
            <Fade>
                <CenteredLayout>
                    <Typography variant={TypographyVariantEnum.h3}> Demandes de reservations </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {isNull(reservationsToDisplay()) ? <Typography variant="h5" sx={{margin:5}}>Aucune demande en attente !</Typography>:reservationsToDisplay()}
                    </>
                </CenteredLayout>
        </Fade>
        )
}

export default WaitingReservationsPage;