import { Component } from '@angular/core';
import { SITE_URL } from '../app.constants';
import { JordanSvgComponent } from '../jordan-svg/jordan-svg.component';
import { ConverseSvgComponent } from '../converse-svg/converse-svg.component';
import { NikeSvgComponent } from '../nike-svg/nike-svg.component';

@Component({
  selector: 'app-header',
  imports: [JordanSvgComponent, ConverseSvgComponent, NikeSvgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  SITE_URL = SITE_URL;
}
