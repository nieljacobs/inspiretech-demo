
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [

  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'User List'
    }
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
    data: {
      title: 'Edit User'
    }
  }

];

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class UserModule { }
