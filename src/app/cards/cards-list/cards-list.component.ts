import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable } from "rxjs";
import { Country } from "../card";
import { CardsService } from "../cards.service";

@Component({
    selector: 'app-cards-list',
    templateUrl: './cards-list.component.html'
})
export class CardsListComponent implements OnInit{

    @ViewChild('countrySearchInput', { static: true }) countrySearchInput: ElementRef;
    countries$: Observable<Country[]>;

    constructor(private cardService: CardsService) {}

    ngOnInit(): void {
        this.fetchCountries();

        fromEvent(this.countrySearchInput.nativeElement, 'keyup').pipe(
            map((event: any) => {
                return event.target.value
            }),
            filter((res) => res.length > 2),
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((text: string) => {
            this.onSearchCountry(text)
        }, (err) => console.log(err));
    }

    fetchCountries() {
        this.countries$ = this.cardService.fetchAllCountries();
    }

    onSearchCountry(text) {
        this.countries$ = this.cardService.fetchCountryByName(text);
    }
}