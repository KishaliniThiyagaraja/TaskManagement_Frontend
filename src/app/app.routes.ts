import { Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

export const routes: Routes = [

    { path: 'add-task', component: AddTaskComponent },
    { path: 'tasks', component: ListTaskComponent },
    { path: 'edit-task/:id', component: EditTaskComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'users', component: ListUserComponent },
    {path: 'edit-user/:id', component:AddUserComponent }

];
