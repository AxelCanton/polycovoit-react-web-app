import { useMemo } from "react";

const countriesQuery = require("countries-code");


export interface ICountryData {
    country_name_en: string,
    country_name_fr: string,
    alpha2: string,
    alpha3: string,
    number: string
}

export const useCountryDataRetriever = () => {
    const countries: ICountryData[] = useMemo(() => countriesQuery.allCountriesList(), []);

    const filterCountryFrenchNameStartWith = (value: string) => {
        const regExp = new RegExp(`^${value.toLowerCase()}`);
        return countries.filter(country => country.country_name_fr.toLowerCase().match(regExp));
    }

    return {
        countries,
        filterCountryFrenchNameStartWith
    }
}
