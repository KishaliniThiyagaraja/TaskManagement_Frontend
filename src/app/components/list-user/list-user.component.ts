import { Component } from '@angular/core';
import { User, UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchuserPipe } from '../../Pipes/searchuser.pipe';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchuserPipe,
  ],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  modalRef?: BsModalRef;
  decline() {
    throw new Error('Method not implemented.');
  }
  confirm() {
    throw new Error('Method not implemented.');
  }

  searchText: string = '';
  users!: User[];
  features: any;
  template: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  onDelete(userId: number) {
    if (confirm('Do you want to delete?')) {
      this.userService.deleteUser(userId).subscribe((data) => {
        this.toastr.success('User is deleted', 'Deleted', {
          timeOut: 10000,
          closeButton: true,
        });
        this.loadUser();
      });
    }
  }

  loadUser() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  onEdit(userId: number) {
    this.router.navigate(['/edit-user', userId]);
  }
}
