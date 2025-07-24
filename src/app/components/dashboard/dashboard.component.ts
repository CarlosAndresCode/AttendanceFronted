import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ importante para componentes standalone
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}
  
  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']); // Redirigir al dashboard si ya está autenticado
    }
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirigir al login después de cerrar sesión
  }
}
