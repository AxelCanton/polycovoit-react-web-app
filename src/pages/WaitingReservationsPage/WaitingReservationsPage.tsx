import { useAppDispatch } from "../../app/hooks";
import WaitingReservation from "../../components/Reservation/WaitingReservation";

const WaitingReservationsPage = () => {

    const dispatch = useAppDispatch()

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
        }]

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