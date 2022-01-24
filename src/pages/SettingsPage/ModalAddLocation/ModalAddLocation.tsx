import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import LocationForm from "../../../components/LocationForm/LocationForm";
import Modal from "../../../components/Modal/Modal";
import { ILatLng, ILocationCreateBody } from "../../../interfaces/location.interface";
import { locationCreateThunk, SUCCESS_CREATE_MESSAGE } from "../../../thunks/LocationsThunk";
import { IModalAddLocationProps } from "./modalAddLocation.types";

const ModalAddLocation = ({
    isVisible,
    setIsVisible
}: IModalAddLocationProps) => {
    const [location, setLocation] = useState<ILocationCreateBody | null>(null);

    const dispatch = useAppDispatch();
    const { isLoading, message } = useAppSelector((state) => state.locationsReducer);

    const submitForm = (city: string, department: string, region: string, country: string, postalCode: number, coordinate: ILatLng) => 
        dispatch(locationCreateThunk(country, city ,postalCode, coordinate.latitude, coordinate.longitude));

    const onClose = useCallback(() => {
      setIsVisible(false);
      setLocation(null);
    }, [setIsVisible, setLocation]);

    useEffect(() => {
      if (message === SUCCESS_CREATE_MESSAGE) {
        onClose();
      }
    }, [message, onClose]);

    return (
      <Modal width='30%' isVisible={isVisible} close={onClose}>
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