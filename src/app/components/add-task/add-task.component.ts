import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  Tasks: any[] = [];
  taskForm: any;
  myCheckLists: any;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService,
    private roastr: ToastrService,
    private userService: UserService
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      duedate: [''],
      priority: ['', [Validators.required]],
      assigneeId: [''],
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  close() {}

  OnSubmit() {
    let task = this.taskForm.value;
    console.log(task);
    task.assigneeId = parseInt(task.assigneeId);
    console.log(task);
    return this.taskService.createTasks(task).subscribe(
      (data) => {
        alert('Task created successfull');
        this.router.navigate(['/tasks']);
      },
      (error) => {
        alert('Task is created failed');
      }
    );
  }

  addCheckList() {
    this.myCheckLists.push(
      this.fb.group({
        name: [''],
        isDone: [false],
      })
    );
  }
  removeCheckList(index: number) {
    this.myCheckLists.removeAt(index);
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
