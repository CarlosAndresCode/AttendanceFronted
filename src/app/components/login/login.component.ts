import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formLogin?.valid) {
      const loginData = this.formLogin.value;
      console.log('Login Data:', loginData);
      // Here you would typically handle the login logic, e.g., call an authentication service
    } else {
      console.log('Form is invalid');
    }
  }
}
