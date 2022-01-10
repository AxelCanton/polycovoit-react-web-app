import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AskedReservation from "../../components/Reservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/ReservationThunk";
import {IReservation} from "../../components/Reservation/reservation.type"

const AskedReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(askedReservationFetch())
    }, [dispatch])

    const reservations = useAppSelector((state) => state.reservationReducer.askedReservations);

    return(
        <div>
            {reservations.map((reservation) => {
                return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
            })}
        </div>
    )
}

export default AskedReservationsPage;

