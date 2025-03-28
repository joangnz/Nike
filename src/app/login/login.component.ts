import { Component } from '@angular/core';
import { SITE_URL } from '../app.constants';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Add HttpClientModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  SITE_URL = SITE_URL;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      // Attempt admin login
      this.authService.loginAdmin(credentials).subscribe({
        next: () => {
          alert('Admin login successful');
          console.log('Logged in as admin');
          this.router.navigate(['/home']);
        },
        error: () => {
          // Attempt user login if admin login fails
          this.authService.loginUser(credentials).subscribe({
            next: () => {
              alert('User login successful');
              console.log('Logged in as user');
              this.router.navigate(['/home']);
            },
            error: () => {
              alert('Invalid credentials');
            },
          });
        },
      });
    }
  }
}
