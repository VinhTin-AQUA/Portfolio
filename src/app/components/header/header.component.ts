import { Component } from '@angular/core';
import { HeaderScrollDirective } from '../../shared/directives/header-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderScrollDirective, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  path: string = '/Portfolio/assets'

  isShowedMenu: boolean = false;

  showMenu() {
    this.isShowedMenu = !this.isShowedMenu;
  }
}
