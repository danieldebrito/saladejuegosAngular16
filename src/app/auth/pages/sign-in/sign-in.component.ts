import { Component } from '@angular/core';
import { AuthService } from "src/app/auth/services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    public authService: AuthService
  ) { }

  public AutoSignIn(){  /// login de prueba
    this.loginForm.setValue( { email: 'danieldebrito@outlook.com', password: '123456' });
  }

  ngOnInit() { }
}

