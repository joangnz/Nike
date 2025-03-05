import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SITE_URL } from './app.constants';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nike';
  SITE_URL = SITE_URL;
}
