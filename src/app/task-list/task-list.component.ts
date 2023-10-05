import { Component } from '@angular/core';
import { TaskService } from '../task.service'; // Import TaskService
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  selectedStatus: string = '';
  selectedPriority: string='';
  selectedDate: string = '';
  selectedTaskIndex: number = -1; // Declare and initialize the selectedTaskIndex property
  isAddTaskFormVisible: boolean = false; // Flag to control form visibility
  isEditFormVisible: boolean = false; // Declare and initialize the isEditFormVisible property
  filteredTasks: Task[] = [];
  openAddTaskForm() {
    // Toggle the visibility of the add task form
    this.isAddTaskFormVisible = !this.isAddTaskFormVisible;
  }
  //Testing code without edit and delete
  // editTask(index: number) {
  //   // Set the selectedTaskIndex to the index of the task being edited
  //   this.selectedTaskIndex = index;
  
  //   // Fill the form with the task data for editing
  //   this.editTaskForm.patchValue({
  //     title: this.filteredTasks[index].title,
  //     dueDate: this.filteredTasks[index].dueDate,
  //     priority: this.filteredTasks[index].priority,
  //     status: this.filteredTasks[index].status,
  //     actions: this.filteredTasks[index].actions
  //   });
  
  //   // Show the form for editing
  //   this.isEditFormVisible = true;
  // }
  // // Function to delete a task
  // deleteTask(index: number) {
  //   // Confirm the delete action with the user
  //   if (confirm('Are you sure you want to delete this task?')) {
  //     // Call the deleteTask method from the service
  //     this.taskService.deleteTask(index);
  //   }
  // }
}
