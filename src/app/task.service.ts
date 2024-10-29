import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  error(arg0: string) {
    throw new Error('Method not implemented.');
  }
  success(arg0: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private http : HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>("http://localhost:5247/api/TaskItems");
  }

  createTasks(task:Task){
    return this.http.post("http://localhost:5247/api/TaskItems",task);
  }
  deleteTask(taskId:number){
    return this.http.delete("http://localhost:5247/api/TaskItems/" + taskId);
  }
  
  getTaskById(taskId:number){
    return this.http.get<Task>('http://localhost:5247/api/TaskItems/'+ taskId);
  }

  updateTask(task: Task) {
    return this.http.put('http://localhost:5247/api/TaskItems' + "/" + task.id, task);
  }

}



export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}

