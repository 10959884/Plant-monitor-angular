// src/app/models/plant.model.ts

export interface Plant {
    id: number;                     // Unique identifier for the plant
    name: string;                   // Name of the plant (e.g., 'Fern')
    type: string;                   // Type of the plant (e.g., 'Succulent', 'Flowering')
    wateringInterval: number;       // How often the plant needs watering (in days)
    lastWatered: Date;              // Date when the plant was last watered
    wateringTime: string;           // Time of day to water the plant (e.g., '09:00 AM')
    lightRequirement: string;       // Light requirement (e.g., 'Low', 'Medium', 'High')
    nextWateringReminder: Date;     // Date and time when the plant needs to be watered again
    nextTaskReminder: string;       // Description of the next task (e.g., 'Water the plant')
  }
  