import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { Person } from './interfaces/persona';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiciosService]
})
export class AppComponent {
  title = 'Nike';

  error: string = '';
  error2: string = '';
  test_post: string = '';
  personal: any;
  persona: Person = {
    id: 701,
    username: 'joangnz',
    password: 'joangnz'
  };
  persona2: Person = {
    id: 700,
    username: 'test',
    password: 'test',
  };

  constructor(private http: ServiciosService) {
    // Create Employee
    // this.http.createEmployee(this.persona).subscribe({
    //   next: (data) => {
    //     this.test_post = data.username;
    //     console.log('Employee created:', data);
    //   },
    //   error: (err) => {
    //     this.error2 = err.message;
    //     console.error('Error creating employee:', err);
    //   },
    //   complete: () => {
    //     console.log('Create employee request completed');
    //   },
    // });

    // Update Employee
    // this.http.updateEmployee(this.persona2).subscribe({
    //   next: (data) => {
    //     this.test_post = data.username;
    //     console.log('Employee updated:', data);
    //   },
    //   error: (err) => {
    //     this.error2 = err.message;
    //     console.error('Error updating employee:', err);
    //   },
    // });

    // // Fetch Local Data
    // this.http.GetLocalData().subscribe({
    //   next: (data) => {
    //     this.personal = data;
    //     console.log('Data fetched successfully:', data);
    //   },
    //   error: (err) => {
    //     this.error = err.message;
    //     console.error('Error fetching data:', err);
    //   },
    // });
  }
}
