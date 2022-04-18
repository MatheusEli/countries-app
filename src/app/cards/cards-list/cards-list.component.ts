import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../card";
import { CardsService } from "../cards.service";

@Component({
    selector: 'app-cards-list',
    templateUrl: './cards-list.component.html'
})
export class CardsListComponent {

    countries$: Observable<Country[]>;

    constructor(private cardService: CardsService) {
        this.fetchCountries();
    }

    fetchCountries() {
        this.countries$ = this.cardService.fetchAllCountries();
    }

    onSearchCountry(event) {
        if(event.target.value != ''){
                this.countries$ = this.cardService.fetchCountryByName(event.target.value);
        }else{
            this.countries$ = this.cardService.fetchAllCountries();
        }
    }
}