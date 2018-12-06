import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  private theUser: User;

  private firstName = new FormControl('', Validators.required);
  private lastName = new FormControl('', Validators.required);
  private role = new FormControl('User', Validators.required);

  getErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
      this.lastName.hasError('email') ? 'Not a valid' : '';
  }

  sumbit() {
    this.theUser = new User(0, this.firstName.value, this.lastName.value, this.role.value);
    this.userService.addUser(this.theUser);
    this.router.navigate(['/user-list']);
  }
}
