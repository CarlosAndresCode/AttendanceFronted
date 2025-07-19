import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ importante para componentes standalone
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']); // Redirigir al dashboard si ya está autenticado
    }
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const loginData = this.formLogin.value;
      this.authService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.name);
          this.router.navigate(['/dashboard']); // Redirigir al dashboard o a la ruta deseada 
        },
        error: (error) => {
          console.error('Login error:', error);
        }
      });

      this.formLogin.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
