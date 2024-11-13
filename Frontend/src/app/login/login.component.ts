import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router'; // Importamos Router para la redirección

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, JsonPipe],
  standalone: true,
})
export class LoginComponent {
  form = signal<FormGroup>(
    new FormGroup({
      email: new FormControl(''),
    })
  );
}
