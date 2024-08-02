import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tasks: Task[] = [];  // Changed from forecasts to tasks
  public title = 'Task Management System';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe
      (
        (result) =>
        {
        this.tasks = result;
      },
      (error) => {
        console.error('Error loading tasks:', error);
      }
    );
  }
}
