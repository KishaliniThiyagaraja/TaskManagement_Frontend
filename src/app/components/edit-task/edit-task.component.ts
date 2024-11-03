import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../../Services/user.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})


export class EditTaskComponent implements OnInit {
  Tasks: any[] = [];
  taskId: number
  taskForm: any; 
  users: User[] = [];





  constructor(private route:Router, 
    private fb: FormBuilder, private taskService: TaskService, private router: Router, private ActivateRoute: ActivatedRoute, private toast: ToastrService , private userService : UserService) {

    const tid = this.ActivateRoute.snapshot.paramMap.get("id");
    this.taskId = Number(tid);

    this.taskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['', [Validators.required]],
      assigneeId : ['']
    })
  }

  ngOnInit(): void {
    this.getData();

    this.taskService.getTaskById(this.taskId).subscribe(data => {
      console.log(data);
      this.taskForm.patchValue(data);
    })

    this.userService.getUsers().subscribe(data => {
    this.users = data;
    })
  }

  getData(){
    this.taskService.getTasks().subscribe(data => {
      console.log(data)
    })
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    const task = this.taskForm.value;

    this.taskService.updateTask(task).subscribe(() => {
      this.toast.success("Task is updated successfully");
      this.router.navigate(["/tasks"]);
    });
  }

  onEdit(taskId: number) {
    this.router.navigate(['/edit-tasks', this.taskId]);
  }
}
