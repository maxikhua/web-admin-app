import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user-list', component: ListUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'home', component: HomeComponent},
];

export const routing = RouterModule.forRoot(routes);
