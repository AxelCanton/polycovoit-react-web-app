import { useEffect, useState } from 'react';
import { IJsonLocation } from '../interfaces/location.interface';
import isNumeric from '../utils/isNumeric';

export interface IFileJsonStruct extends Array<IJsonLocation>{}

export const useCityDataRetriever = () => {
    const [data,setData] = useState<IFileJsonStruct>([]);

    useEffect(() => {
        fetch('franceCities.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }, []);

    const filterPostalCodeStartWith = (postalCode: string) => {
        const regExp = new RegExp(`^${postalCode}`);
        return data.filter(data => data.code_postal.toString().match(regExp));
    };

    const filterCityStartWith = (city: string) => {
      const regExp = new RegExp(`^${city}`);
        return data.filter(data => data.nom_commune.toLowerCase().match(regExp));
    };

    const filterDepartmentStartWith = (city: string) => {
      const regExp = new RegExp(`^${city}`);
        return data.filter(data => data.nom_commune.toLowerCase().match(regExp));
    };

    const filterRegionStartWith = (city: string) => {
      const regExp = new RegExp(`^${city}`);
        return data.filter(data => data.nom_commune.toLowerCase().match(regExp));
    };

    const filterStartWith = (value: string) => {
      if (isNumeric(value)) {
        return filterPostalCodeStartWith(value);
      } else {
        const regExp = new RegExp(`^${value.toLowerCase()}`);
        const cond = (data: string) => data.toLowerCase().replaceAll('-',' ').match(regExp);
        return data.filter(data => cond(data.nom_commune) || cond(data.nom_departement) || cond(data.nom_region));
      }
    };

    return {
      data,
      filterCityStartWith,
      filterDepartmentStartWith,
      filterRegionStartWith,
      filterPostalCodeStartWith,
      filterStartWith
    };
}