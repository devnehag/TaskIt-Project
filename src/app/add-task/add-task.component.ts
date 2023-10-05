import { Component, Input } from '@angular/core';
// add an input property to receive the isAddTaskFormVisible flag
import { Task } from '../models/task.model';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() isFormVisible: boolean= false; // Input property to control form visibility
 // taskToAdd: Task = new Task('', new Date(), 'Low', 'To Do', ['Edit']);
  taskToAdd: Task = new Task('', new Date(), 'Low', 'To Do');
  constructor(private taskService: TaskService) {}

  openAddTaskForm() {
    this.isFormVisible = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const taskToAdd = new Task(
        form.value.title,
        form.value.dueDate,
        form.value.priority,
        form.value.status,
        //form.value.actions
      );
      
      this.taskService.addTask(taskToAdd);

      // You can optionally reset the form and hide it.
      form.resetForm();
      this.isFormVisible = false;
    }
  }
}
