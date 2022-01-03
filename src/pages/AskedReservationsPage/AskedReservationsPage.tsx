import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AskedReservation from "../../components/AskedReservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/AskedReservationThunk";
import {IAskedReservation} from "../../components/AskedReservation/askedReservation.type"

const AskedReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(askedReservationFetch())
    }, [dispatch]
    )

    //const reservations = useAppSelector((state) => state.askedReservationReducer.reservations);

    const reservations = [
        {
            id: 1,
            postalCode: 34090,
            message: 'Message test A',
            accepted: 0,
            date: Date.prototype,
            askingUser: 1,
            receivingUserGender: 'Homme',
            receivingUser: {},
        },{
            id: 2,
            postalCode: 34090,
            message: 'Message test B',
            accepted: -1,
            date: Date.prototype,
            askingUser: 1,
            receivingUserGender: 'Homme',
            receivingUser:{} ,
        },{
            id: 3,
            postalCode: 34000,
            message: 'Message test C',
            accepted: 1,
            date: Date.prototype,
            askingUser: 1,
            receivingUserGender: 'Femme',
            receivingUser: {
                firstName : "Rudy"
            },
        }
        
    ]

    return(
        <div>
            {reservations.map((reservation) => {
                return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
            })}
        </div>
    )
}

export default AskedReservationsPage;

