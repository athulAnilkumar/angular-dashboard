import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    localStorage.setItem('token', '');
  }

  onLoginBtnClick() {
    if (this.username === 'test' && this.password === 'test') {
      localStorage.setItem('token', 'helloThisIsLoginToken');
      this.route.navigateByUrl('/dashboard');
    }
  }
}
