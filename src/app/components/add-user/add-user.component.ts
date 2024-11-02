import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User, UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number;
  isSubmmited: boolean | undefined;
  loadingIndicator: boolean | undefined;
  user: any;
  isEditForm: boolean | undefined;
  //currentUserAddressId: any;
 currentuser?: User;
  form: any;
  currentUserAddress: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    const uid = this.route.snapshot.paramMap.get('id');
    this.userId = Number(uid);

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      password: [''],
      phone: ['', [Validators.required]],
      address : this.fb.group({
        addressLine1 : [''],
        addressLine2 : [''],
        city : ['']
      })
    });

    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.userService.getUser(this.userId).subscribe(
        (data) => {
          this.currentUserAddress = data.address
          this.userForm.patchValue({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
          });
        },
        (error) => {
          this.toastr.error('User is not found');
        }
      );
    }
  }

  onSubmit() {
    let user = this.userForm.value;

    if (this.isEditMode == true) {
      user.id = this.userId;
      user.address.userId = this.userId;
      console.log(user);
      user.address.id = this.currentUserAddress.id
      console.log(user.address)
      this.userService.updateUser(user).subscribe((data) => {
        this.toastr.success('User is updated successfully');
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.createUser(user).subscribe((data) => {
        this.toastr.success('User is created successfully');
        this.router.navigate(['/users']);
      });
    }
  }

  cancel() {
    this.userForm.reset();
  }

  // onAddUser() {
  //   this.isSubmmited = true;
  //   this.loadingIndicator = true;
  //   this.user = this.userForm.value;

  //   if (this.userForm.valid) {
  //     this.user.id = 0;

  //     this.userService.createUser(this.user).subscribe({
  //       next: (res: any) => {
  //         this.toastr.success('successfully added', 'Success');
  //       },
  //       complete: () => {
  //         this.router.navigate(['/users']);
  //         this.isSubmmited = false;
  //         this.loadingIndicator = false;
  //       },
  //       error: (err: any) => {
  //         this.isSubmmited = false;
  //         this.loadingIndicator = false;
  //       },
  //     });
  //   } else if (this.isEditForm == true) {
  //     let user = this.userForm.value;
  //     console.log(this.currentUserAddressId);
  //     user.address.id = this.currentUserAddressId;
  //     console.log(user);
  //     this.userService.updateUser(user).subscribe((data) => {
  //       this.isSubmmited = false;
  //       this.toastr.success('successfully updated', 'Success');
  //       this.router.navigate(['/users']);
  //     });
  //   } else {
  //     this.isSubmmited = false;
  //     this.loadingIndicator = false;
  //   }
  // }
}
