import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from '../../core/login.service';
import { User } from "../login/user.model";
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }

  login() {
    this.loginService.login(this.loginForm.get('email').value,
      this.loginForm.get('password').value)
      .subscribe(user => this.notificationService.notify(`Bem vindo ${user.name}`),
      response => this.notificationService.notify(response.error.message));
  }


}
