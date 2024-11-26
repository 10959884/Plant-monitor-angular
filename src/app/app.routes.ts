// src/app/app.routes.ts

import { Route, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { TaskReminderComponent } from './task-reminder/task-reminder.component';

export const  routes: Route[]= [
  { path: '', component: PlantListComponent },           // Default route (Landing page)
  { path: 'add-plant', component: AddPlantComponent },   // Route to add new plant
  { path: 'task-reminder', component: TaskReminderComponent },
];
