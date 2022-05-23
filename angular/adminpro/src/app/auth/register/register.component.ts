import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmedPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const errMsgs = [];

    if (this.name.trim() === '') errMsgs.push('Name is required');

    if (this.name.trim() === '') errMsgs.push('Email is required');

    if (this.name.trim() === '') errMsgs.push('Password is required');

    if (this.name.trim() === '') errMsgs.push('Confirm Password is required');

    if (errMsgs.length > 0) return alert(errMsgs.join('\n'));

    if (this.password !== this.confirmedPassword)
      return alert('Password does not match');

    const newUser: User = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.authService.register(newUser).subscribe((res) => {
      if (res.status == 200) {
        if (res.body.ok) {
          this.router.navigate(['/login']);
        } else {
          alert('Email already has an account');
        }
      } else {
        alert(res.body);
      }
    });
  }
}
