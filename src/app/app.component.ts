import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentsComponent } from './components/first-components/first-components.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
}
