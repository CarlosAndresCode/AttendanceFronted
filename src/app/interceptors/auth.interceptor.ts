import { Injectable } from "@angular/core";

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del almacenamiento local
    const token = localStorage.getItem('token');

    // Si el token existe, clonar la solicitud y agregar el encabezado de autorización
    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }
    // Pasar la solicitud al siguiente manejador
    return next.handle(request);
  }
}