import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Aquí importas las rutas definidas
import { AppComponent } from './app/app.component'; // El componente raíz

// Proveemos el enrutador con las rutas definidas
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Proveedor de rutas para la aplicación
}).catch((err) => console.error(err));
