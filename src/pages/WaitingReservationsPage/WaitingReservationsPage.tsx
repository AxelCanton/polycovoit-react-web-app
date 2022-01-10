import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import WaitingReservation from "../../components/Reservation/WaitingReservation";
import { waitingReservationFetch } from "../../thunks/ReservationThunk";

const WaitingReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(waitingReservationFetch())
    }, [dispatch])

    const reservations = useAppSelector((state) => state.reservationReducer.waitingReservations);
        return (
            <div>
                {reservations.map((reservation) => {
                    if(reservation.accepted === 0){
                        return <WaitingReservation reservation={reservation} key={reservation.id}></WaitingReservation>
                    }
                })}
            </div>
        )
}

export default WaitingReservationsPage;