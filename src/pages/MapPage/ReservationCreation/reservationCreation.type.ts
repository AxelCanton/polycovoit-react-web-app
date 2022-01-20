import { ILocation } from "../../../interfaces/location.interface";

export interface IReservationCreationRequiredProps {
    selectedMarker: ILocation | null,
    setSelectedMarkertoNull: () => void
}

export interface IReservationCreationOptionalProps {
}

export interface IReservationCreationProps extends IReservationCreationRequiredProps, IReservationCreationOptionalProps {}