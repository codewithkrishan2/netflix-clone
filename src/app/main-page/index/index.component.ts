import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from "../main/main.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, MainComponent, RegisterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
