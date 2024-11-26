import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent {

  constructor(private router: Router) {}

  navigateToTaskReminder() {
    this.router.navigate(['/task-reminder']);
  }
}
