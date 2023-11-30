import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-accueil-utilisateur',
    standalone: true,
    templateUrl: './accueil-utilisateur.component.html',
    styleUrl: './accueil-utilisateur.component.css',
    imports: [HeaderComponent]
})
export class AccueilUtilisateurComponent {

}
