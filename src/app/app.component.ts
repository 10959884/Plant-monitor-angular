import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { TaskReminderComponent } from './task-reminder/task-reminder.component';

// Define routes directly in the component
const routes = [
  { path: '', component: PlantListComponent },               // Default route
  { path: 'add-plant', component: AddPlantComponent },       // Add plant route
  { path: 'task-reminder/:id', component: TaskReminderComponent },  // Task reminder route
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,PlantListComponent,AddPlantComponent,TaskReminderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plant-monitor-app';
}
