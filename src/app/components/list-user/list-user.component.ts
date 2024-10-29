import { Component } from '@angular/core';
import { User, UserService } from '../../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [RouterModule, RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {


  searchText: string = '';
  users! : User[]
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loadUser();
  }

  onDelete(userId: number) {
    if (confirm('Do you want to delete?')) {
      this.userService.deleteUser(userId).subscribe(data => {
        this.toastr.success('User is deleted', "Deleted", {
          timeOut: 10000,
          closeButton: true
        });
        this.loadUser();
      });
    }
  }

  loadUser() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onEdit(userId: number) {
    this.router.navigate(['/edit-user', userId])
  }

}


