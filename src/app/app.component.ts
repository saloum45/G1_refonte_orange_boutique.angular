import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./utilisateurs/accueil/accueil.component";
import { HeaderComponent } from './utilisateurs/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AccueilComponent,RouterLink,HeaderComponent]
})
export class AppComponent {
  title = 'refonte';
}
