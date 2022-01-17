import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Dialog from "../../../components/Dialog/Dialog";
import LocationList from "../../../components/LocationList/LocationList";
import { ILocationWithoutUserData } from "../../../interfaces/location.interface";
import { deleteLocationThunk } from "../../../thunks/LocationsThunk";

const Locations = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const selectedLocation = useRef<number | null>(null);

    const hideDialog = () => setOpenDialog(false);

    const { user } = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    const onLocationClick = (location: ILocationWithoutUserData) => {
        setOpenDialog(true);
        selectedLocation.current = location.id;
    }

    const deleteLocation = () => {
        if (selectedLocation.current) {
            dispatch(deleteLocationThunk(selectedLocation.current));
        }
    }

    return (
        <>
            {user && <LocationList locations={user.locations} onLocationClick={onLocationClick} />}
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