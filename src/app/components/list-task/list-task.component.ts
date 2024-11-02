import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Modals/task';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
 
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit{
  Tasks : any[] = [];
  taskform: any;

  constructor(private taskservice : TaskService){}

  ngOnInit(): void {
    this.loadTask()
  }
  onDelete(taskId:number){
    this.taskservice.deleteTask(taskId).subscribe(data=>{
      alert("This is deleted successfully.")
      this.loadTask()
    })
  }
 

  loadTask() {
    this.taskservice.getTasks().subscribe(data =>{
      this.Tasks = data;
    },error =>{
      alert('data not found')
    })
  }
}
