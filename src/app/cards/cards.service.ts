import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Country } from "./card";

@Injectable({
    providedIn: 'root'
})
export class CardsService{
    constructor(private http: HttpClient){}

    fetchAllCountries(): Observable<Country[]>{
        return this.http.get<Country[]>('https://restcountries.com/v2/all');
    }

    fetchCountryByName(name: string): Observable<Country[]>{
        return this.http.get<Country[]>(`https://restcountries.com/v2/name/${name}`);
    }
}