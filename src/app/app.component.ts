import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SITE_URL } from './app.constants';
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
  SITE_URL = SITE_URL;

  error: string = '';
  error2: string = '';
  test_post: string = '';
  personal: any;
  persona: Person = {
    id: 701,
    data: { email: 'TEST', name: 'TEST', last_name: 'TEST', avatar: 'TEST' },
  };
  persona2: Person = {
    id: 700,
    data: { email: 'TEST', name: 'TEST', last_name: 'TEST', avatar: 'TEST' },
  };
  persona3: Person = {
    id: 1,
    data: { email: 'TEST', name: 'TEST', last_name: 'TEST', avatar: 'TEST' },
  };

  constructor(private http: ServiciosService) {
    this.http.createEmployee(this.persona).subscribe({
      next: (data) => {
        this.test_post = data.data.name;
      },
      error: (err) => {
        this.error2 = err;
      },
      complete: () => {
        console.log('Request completed');
      },
    });

    this.http.updateEmployee(this.persona2).subscribe({
      next: (data) => {
        this.test_post = data.data.name;
      },
      error: (err) => {
        this.error2 = err;
      }
    });

    this.http.GetLocalData().subscribe({
      next: (data) => {
        this.personal = data;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }
}
