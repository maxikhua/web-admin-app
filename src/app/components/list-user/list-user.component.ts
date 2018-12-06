import {Component} from '@angular/core';
import {Role} from '../../enums/role.enum';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(private router: Router, private userService: UserService) {
  }

  users: User[] = this.userService.getUsers();

  onUserDelete(user: User) {
    this.userService.deleteUser(user);
    this.router.navigate(['/user-list']);
  }
}

