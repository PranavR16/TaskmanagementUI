import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; // Adjust the import path as necessary
import { Task } from '../../models/task.model'; // Adjust the import path as necessary

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  taskId: number | null = null; // Holds the task ID to fetch
  task: Task | null = null; // Holds the fetched task

  constructor(private taskService: TaskService) { }

  ngOnInit(): void
  {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error loading tasks:', error);
      }
    );
  }

  fetchTask(): void {
    if (this.taskId !== null)
    {
      this.taskService.getTaskById(this.taskId).subscribe((data: Task) =>
      {
          this.task = data;
      },
        (error) => {
          console.error('Error loading task:', error);
        }
      );
    }
  }
}
