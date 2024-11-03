import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TaskService } from './Services/task.service';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent, RouterLink, ListTaskComponent,EditTaskComponent,AddUserComponent,ListUserComponent,RegisterComponent,LoginComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Task';
Tasks: any;
  
}
