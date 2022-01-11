import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AskedReservation from "../../components/Reservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/ReservationThunk";
import {IReservation} from "../../components/Reservation/reservation.type"
import Fade from "../../components/Transitions/Fade/Fade";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import { Typography } from "@mui/material";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";

const AskedReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(askedReservationFetch())
    }, [dispatch])

    const today:Date = new Date()

    const reservations = useAppSelector((state) => state.reservationReducer.askedReservations);

    return(
        <Fade>
                <CenteredLayout>
                    <Typography variant={TypographyVariantEnum.h3}> Vos demandes de reservations : </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {reservations.map((reservation) => {
                            if(new Date(reservation.date) >= new Date(today.getDate() - 1)){
                                return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                            }
                        })}
                    </>
                    <Typography variant={TypographyVariantEnum.h4}> Vos demandes passées : </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {reservations.map((reservation) => {
                            if(new Date(reservation.date) < new Date() && reservation.accepted === 1){
                                return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                            }
                        })}
                    </>
                </CenteredLayout>
        </Fade>
    )
}

export default AskedReservationsPage;

