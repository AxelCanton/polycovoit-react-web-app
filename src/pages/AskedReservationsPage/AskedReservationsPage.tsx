import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import AskedReservation from "../../components/AskedReservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/AskedReservationThunk";

const AskedReservationsPage = () => {

    const [reservations, setReservations] = useState([]);
    const dispatch = useAppDispatch()

    const test = () => {
        dispatch(askedReservationFetch())
    }

    return(
        <button onClick={test}>test</button>
            //<AskedReservation reservation={reservations[0]}></AskedReservation>
    )
}

export default AskedReservationsPage;