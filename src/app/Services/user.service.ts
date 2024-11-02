import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>("http://localhost:5247/api/Users");
  }

  createUser(user: User) {
    return this.http.post("http://localhost:5247/api/Users", user);
  }

  deleteUser(userId: number) {
    return this.http.delete("http://localhost:5247/api/Users/" + userId);
  }

  getUser(userId: number) {
    return this.http.get<User>("http://localhost:5247/api/Users/" + userId);
  }

  updateUser(user: User) {
    return this.http.put("http://localhost:5247/api/Users/" + user.id, user);
  }

}

export interface User {
lastname: any;
firstname: any;
tasks: any;
address: any;
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}
