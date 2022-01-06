import { Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import LocationForm from "../../../components/LocationForm/LocationForm";
import Modal from "../../../components/Modal/Modal";
import { IJsonLocation } from "../../../interfaces/location.interface";
import { locationCreateThunk, SUCCESS_CREATE_MESSAGE } from "../../../thunks/LocationsThunk";
import { IModalAddLocationProps } from "./modalAddLocation.types";

const ModalAddLocation = ({
    isVisible,
    setIsVisible
}: IModalAddLocationProps) => {
    const [location, setLocation] = useState<IJsonLocation | null>(null);

    const dispatch = useAppDispatch();
    const { isLoading, message } = useAppSelector((state) => state.locationsReducer);

    const submitForm = () => {
      if (location) {
        const latitude = location.latitude;
        const longitude = location.longitude;
        if (latitude === "" || longitude === "") {
          // Some data of the json do not have coordinates

          // TODO: specify the place with a marker
        } else {
          dispatch(locationCreateThunk(location.nom_commune ,location.code_postal, latitude as number, longitude as number));
        }
      }
    }

    const onClose = useCallback(() => {
      setIsVisible(false);
      setLocation(null);
    }, [setIsVisible, setLocation]);

    useEffect(() => {
      if (message === SUCCESS_CREATE_MESSAGE) {
        console.log('aaa')
        onClose();
      }
    }, [message, onClose]);

    return (
      <Modal isVisible={isVisible} close={onClose}>
              <LocationForm
              location={location}
              isLoading={isLoading}
              setLocation={setLocation}
              validate={submitForm}
              />
      </Modal>
    )
}

export default ModalAddLocation;