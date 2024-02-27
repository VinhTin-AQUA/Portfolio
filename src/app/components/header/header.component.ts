import { Component } from '@angular/core';
import { HeaderScrollDirective } from '../../shared/directives/header-scroll.directive';
import { CommonModule } from '@angular/common';
import { HeaderCollapseScrollDirective } from '../../shared/directives/header-collapse-scroll.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderScrollDirective, CommonModule, HeaderCollapseScrollDirective],
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
