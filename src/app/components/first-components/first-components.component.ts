import { Component } from '@angular/core';
import { IntoComponentComponent } from '../into-component/into-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-components',
  standalone: true,
  imports: [CommonModule ,IntoComponentComponent],
  templateUrl: './first-components.component.html',
  styleUrl: './first-components.component.css'
})
export class FirstComponentsComponent {

name:string = "João Pedro Moura Tuneli";
age:number =  21;
job:string = "DevOps Engineering"
hobbies = ["Music","Sports","Movies"]
car = { make:"Ford", model: "Fiesta" }

  constructor(){

  }

}
