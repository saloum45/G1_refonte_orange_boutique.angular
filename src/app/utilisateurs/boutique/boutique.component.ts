import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-boutique',
    standalone: true,
    templateUrl: './boutique.component.html',
    styleUrl: './boutique.component.css',
    imports: [RouterLink, HeaderComponent]
})
export class BoutiqueComponent {

}
