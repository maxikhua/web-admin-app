import {Injectable} from '@angular/core';
import {Role} from '../enums/role.enum';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public users: User[] = [
    {id: 1, firstName: 'Bill', lastName: 'Gates', role: Role.Admin},
    {id: 2, firstName: 'John', lastName: 'Terry', role: Role.User},
    {id: 3, firstName: 'Bruce', lastName: 'Wayne', role: Role.Admin},
    {id: 4, firstName: 'Will', lastName: 'Smith', role: Role.User},
    {id: 5, firstName: 'Marcus', lastName: 'Oscar', role: Role.Admin},
  ];

  public getUsers(): User[] {
    return this.users;
  }

  public deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  public addUser(thatUser: User) {
    this.users.push(thatUser);
  }
}
