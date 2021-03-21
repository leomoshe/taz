import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../../core/models';
import { UserService } from '../../core/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // method and properties are public by default
  // '$' observable or stream notation
  users$: Observable<User[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
