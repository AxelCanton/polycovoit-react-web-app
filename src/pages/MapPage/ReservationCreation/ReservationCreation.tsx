import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Modal from "../../../components/Modal/Modal";
import CreateReservation from "../../../components/Reservation/CreateReservation";
import { reservationActions } from "../../../slices/ReservationSlice";
import { createReservationThunk } from "../../../thunks/ReservationThunk";
import { IReservationCreationProps } from "./reservationCreation.type";

const ReservationCreation = ({
    selectedMarker,
    setSelectedMarkertoNull
}: IReservationCreationProps) => {
    const dispatch = useAppDispatch();
    const { isLoading, successCreate } = useAppSelector((state) => state.reservationReducer);

    const isModalVisible = selectedMarker !== null;

    const onValidate = (id: number, message: string, date: Date) => {
        dispatch(createReservationThunk(id, message, date))
    };

    useEffect(() => {
        if (successCreate) {
            setSelectedMarkertoNull();
            dispatch(reservationActions.reset());
        }
    }, [dispatch, setSelectedMarkertoNull, successCreate]);
    
    return (
        <>
            {selectedMarker && (
                <Modal isVisible={isModalVisible} close={() => setSelectedMarkertoNull()}>
                    <CreateReservation isLoading={isLoading} location={selectedMarker} onValidate={onValidate}></CreateReservation>
                </Modal>
            )}
        </>
    );
}

export default ReservationCreation;