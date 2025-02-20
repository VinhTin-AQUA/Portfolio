import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-logo',
  imports: [],
  templateUrl: './svg-logo.component.html',
  styleUrl: './svg-logo.component.scss'
})
export class SvgLogoComponent {
    @Input() iconName!: string; // Tên icon
    @Input() classes: string = 'w-6 h-6'; // Mặc định dùng màu của văn bản
}
