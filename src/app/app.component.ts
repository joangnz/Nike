import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { Person } from './interfaces/persona';
import { ServiciosService } from './services/servicios.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiciosService]
})
export class AppComponent {
  title = 'Nike';

  constructor(private http: ServiciosService) {}
}
