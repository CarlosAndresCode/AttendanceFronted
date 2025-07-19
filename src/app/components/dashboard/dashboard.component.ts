import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ importante para componentes standalone
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  logOut() {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirigir al login después de cerrar sesión
  }
}
