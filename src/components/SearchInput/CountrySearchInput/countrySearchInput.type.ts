import { ICountryData } from "../../../hooks/useCountryDataRetriever";

export interface ICountrySearchInputRequiredProps {
}

export interface ICountrySearchInputOptionalProps {
    label: string,
    setCountry: (country: ICountryData | null) => void,
    onInputChange: (value: string) => void
}

export interface ICountrySearchInputProps extends ICountrySearchInputRequiredProps, ICountrySearchInputOptionalProps {}