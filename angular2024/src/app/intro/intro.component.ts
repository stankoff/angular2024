import { Component } from '@angular/core';
import { HeaderComponent } from "../layout/header/header.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
