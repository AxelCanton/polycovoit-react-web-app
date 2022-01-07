import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Dialog from "../../../components/Dialog/Dialog";
import LocationList from "../../../components/LocationList/LocationList";
import Progress from "../../../components/Progress/Progress";
import { ILocationWithoutGender } from "../../../interfaces/location.interface";
import { deleteLocationThunk } from "../../../thunks/LocationsThunk";

const Locations = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const selectedLocation = useRef<number | null>(null);

    const hideDialog = () => setOpenDialog(false);

    const { user, isLoading } = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    const onLocationClick = (location: ILocationWithoutGender) => {
        setOpenDialog(true);
        selectedLocation.current = location.id;
    }

    const deleteLocation = () => {
        if (selectedLocation.current) {
            dispatch(deleteLocationThunk(selectedLocation.current));
        }
    }

    return isLoading || !user ? <Progress /> : (
        <>
            <LocationList locations={user.locations} onLocationClick={onLocationClick} />
            <Dialog
                open={openDialog}
                onClose={hideDialog}
                onAccept={deleteLocation}
                onDeny={hideDialog}
                title="Supprimer cette addresse ?"
                />
        </>
    )
}

export default Locations;