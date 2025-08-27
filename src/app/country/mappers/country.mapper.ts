import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

/* Transformar un pais de la api a nuestra interfaz propia */


    static mapRestCountryToCountry ( restCountry: RESTCountry ): Country{
        return {
            capital: restCountry.capital.join(','),
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            name: restCountry.translations['spa'].common ?? 'No Spanish Name' ,
            population: restCountry.population,
        }
    }

/* Transformar un arreglo de paises de la api a nuestra interfaz propia */


    static mapRestCountryArrayToCountryArray (restCountries: RESTCountry[]): Country[] {
        return restCountries.map(this.mapRestCountryToCountry)
    }

}