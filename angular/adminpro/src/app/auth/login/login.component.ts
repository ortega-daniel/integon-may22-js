import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/interfaces/login-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const errMsgs = [];

    if (this.username.trim() === '') errMsgs.push('Username is required');

    if (this.password.trim() === '') errMsgs.push('Password is required');

    if (errMsgs.length > 0) return alert(errMsgs.join('\n'));

    const loginRequest: LoginRequest = {
      email: this.username,
      password: this.password,
    };

    this.authService.login(loginRequest).subscribe((res) => {
      if (res.body != null) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}
