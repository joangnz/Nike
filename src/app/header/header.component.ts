import { Component } from '@angular/core';
import { JordanSvgComponent } from '../jordan-svg/jordan-svg.component';
import { ConverseSvgComponent } from '../converse-svg/converse-svg.component';

@Component({
  selector: 'app-header',
  imports: [JordanSvgComponent, ConverseSvgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
