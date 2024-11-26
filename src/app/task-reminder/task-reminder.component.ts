import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-reminder',
  templateUrl: './task-reminder.component.html',
  styleUrls: ['./task-reminder.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TaskReminderComponent {
  taskName: string = '';
  taskFrequency: string = '';
  taskTime: string = '';
  tasks: { name: string; frequency: string; time: string }[] = [];
  streak: number = 0; // Track the user's task streak
  countdownText: string = '';
  reminderMessage: string = '';
  showReminderMessage: boolean = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.requestNotificationPermission();
  }

  addTask() {
    if (this.taskName && this.taskFrequency && this.taskTime) {
      const newTask = {
        name: this.taskName,
        frequency: this.taskFrequency,
        time: this.taskTime,
      };
      this.tasks.push(newTask);

      // Schedule a countdown
      if (this.isBrowser) {
        this.startCountdown(newTask);
      }

      this.clearForm();
    }
  }

  deleteTask(task: { name: string; frequency: string; time: string }) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  doneTask(task: { name: string; frequency: string; time: string }) {
    this.tasks = this.tasks.filter((t) => t !== task); // Remove task from list
    this.streak++; // Increment streak counter
    this.clearReminder(); // Clear reminder display
  }

  clearForm() {
    this.taskName = '';
    this.taskFrequency = '';
    this.taskTime = '';
  }

  requestNotificationPermission() {
    if (this.isBrowser && 'Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') {
          console.warn('Notification permissions denied.');
        }
      });
    } else {
      console.warn('Notifications are not supported in this environment.');
    }
  }

  startCountdown(task: { name: string; frequency: string; time: string }) {
    const [hours, minutes] = task.time.split(':').map(Number);
    const now = new Date();
    const taskTime = new Date();

    taskTime.setHours(hours, minutes, 0, 0);

    if (taskTime < now) {
      taskTime.setDate(taskTime.getDate() + 1);
    }

    const timeDifference = taskTime.getTime() - now.getTime();
    const interval = setInterval(() => {
      const remaining = Math.max(taskTime.getTime() - new Date().getTime(), 0);
      this.countdownText = `Time left: ${Math.floor(remaining / 1000)}s`;

      if (remaining <= 0) {
        clearInterval(interval);
        this.showReminder(task.name);
      }
    }, 1000);
  }

  showReminder(taskName: string) {
    this.reminderMessage = `Do this: ${taskName}`;
    this.showReminderMessage = true;

    if (this.isBrowser && 'Notification' in window && Notification.permission === 'granted') {
      new Notification('Plant Task Reminder', {
        body: `It's time to: ${taskName}`,
        icon: 'assets/plant-icon.png',
      });
    }
  }

  clearReminder() {
    this.showReminderMessage = false; // Hide the reminder message
    this.reminderMessage = ''; // Clear the message text
    this.countdownText = ''; // Clear the countdown text
  }
}
