import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-assistance',
    standalone: true,
    templateUrl: './assistance.component.html',
    styleUrl: './assistance.component.css',
    imports: [HeaderComponent]
})
export class AssistanceComponent {

}
