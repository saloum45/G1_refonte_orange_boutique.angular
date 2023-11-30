import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-panier',
    standalone: true,
    templateUrl: './panier.component.html',
    styleUrl: './panier.component.css',
    imports: [HeaderComponent]
})
export class PanierComponent {

}
