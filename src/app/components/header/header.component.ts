import { Component } from '@angular/core';
import { HeaderScrollDirective } from '../../shared/directives/header-scroll.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
