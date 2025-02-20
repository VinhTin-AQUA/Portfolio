import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-outline-icon',
  imports: [],
  templateUrl: './svg-outline-icon.component.html',
  styleUrl: './svg-outline-icon.component.scss'
})
export class SvgOutlineIconComponent {
    @Input() iconName!: string; // Tên icon
    @Input() stroke: string = 'none'; // Mặc định dùng màu của văn bản
    @Input() classes: string = 'w-6 h-6'; // Mặc định dùng màu của văn bản
}
