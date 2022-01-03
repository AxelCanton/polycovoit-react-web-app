import { useEffect, useState } from 'react';
import { IJsonLocation } from '../interfaces/location.interface';

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
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }, []);

    const filterPostalCodeStartWith = (postalCode: string) => {
        const regExp = new RegExp(`^${postalCode}`);
        return data.filter(data => data.code_postal.toString().match(regExp))
    }

    return {data, filterPostalCodeStartWith};
}