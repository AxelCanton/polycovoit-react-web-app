import { ILatLng } from "../../../interfaces/location.interface";

export interface IForeignCountryRequiredProps {
    city: string,
    country: string,
    coordinate: ILatLng | null,
    setCity: (city: string) => void,
    setCountry: (country: string) => void,
    setPostalCode: (postalCode: number) => void,
    setCoordinate: (coordinate: ILatLng | null) => void
}

export interface IForeignCountryOptionalProps {
}

export interface IForeignCountryProps extends IForeignCountryRequiredProps, IForeignCountryOptionalProps {}