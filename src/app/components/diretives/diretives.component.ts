import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretives.component.html',
  styleUrl: './diretives.component.css',
})
export class DiretivesComponent {
  size = 50;
  font = 'Arial';
  color = 'yellow';
  hobbies = ['Music', 'Sports', 'Movies'];
  isActive = true;
  hasError = true;
}
