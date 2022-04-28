import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  errorMessage: string = '';
  isLoading: boolean = false;
  users: User[] = [];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers(): void {

    this.isLoading = true;
    this.userService.getUsers().subscribe(
      {
        next: (users: User[]) => {

          this.users = users;
          this.isLoading = false;
        },
        error: err => {
          this.errorMessage = err;
          this.isLoading = false;
        }
      }
    )
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  onCancelUserDetail(): void {
    this.selectedUser = null;
  }

}
