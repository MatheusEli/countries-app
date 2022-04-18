import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { CardDetailComponent } from "./card-detail/card-detail.component";
import { CardsComponent } from "./cards.component";

const routes: Routes = [
    {
        path: '',
        component: CardsComponent,
        children: [
            {
                path: ':id',
                component: CardDetailComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardsRoutingModule{}