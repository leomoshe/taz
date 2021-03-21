import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouting } from './user.routing';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserRouting
  ]
})
export class UserModule { }
