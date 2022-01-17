import { Fade, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import WaitingReservation from "../../components/Reservation/WaitingReservation";
import { waitingReservationFetch } from "../../thunks/ReservationThunk";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";

const WaitingReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(waitingReservationFetch())
    }, [dispatch])

    const reservations = useAppSelector((state) => state.reservationReducer.waitingReservations);
        return (
            <Fade>
                <CenteredLayout>
                    <Typography variant={TypographyVariantEnum.h3}> Demandes de reservations : </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {reservations.map((reservation) => reservation.accepted === 0
                        ? <WaitingReservation reservation={reservation} key={reservation.id}></WaitingReservation>
                        : <></>
                        )}
                    </>
                </CenteredLayout>
        </Fade>
        )
}

export default WaitingReservationsPage;