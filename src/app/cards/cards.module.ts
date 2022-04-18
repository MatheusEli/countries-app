import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardDetailComponent } from "./card-detail/card-detail.component";
import { CardItemComponent } from "./card-item/card-item.component";
import { CardsListComponent } from "./cards-list/cards-list.component";
import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";

@NgModule({
    declarations: [CardsComponent, CardsListComponent, CardDetailComponent, CardItemComponent],
    imports: [CommonModule, CardsRoutingModule],
    exports: []
})
export class CardsModule{}