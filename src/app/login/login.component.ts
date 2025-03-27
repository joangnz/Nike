import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (response) => {
          alert('Login successful');
          console.log('User role:', response.role); // Handle role-based logic here
        },
        error: () => alert('Invalid credentials'),
      });
    }
  }
}
