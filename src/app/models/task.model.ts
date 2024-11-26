// src/app/models/task.model.ts

export interface Task {
    id: number;         // Unique identifier for the task
    description: string; // A brief description of the task (e.g., "Water the plant")
    interval: number;   // How often the task occurs, in days (e.g., every 7 days)
  }
  