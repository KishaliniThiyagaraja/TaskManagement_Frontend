import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  Tasks: any[] = [];
  taskForm: any;


  constructor(private fb: FormBuilder, private router: Router, private taskService:TaskService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      duedate: [''],
      priority: ['',[Validators.required]],
    });
  }

  OnSubmit() {
    let task = this.taskForm.value;
    return this.taskService.createTasks(task).subscribe(data =>{
      alert('Task created successfull');
      this.router.navigate(['/tasks'])
    }, error=>{
      alert("Task is created failed")
    })
   
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
