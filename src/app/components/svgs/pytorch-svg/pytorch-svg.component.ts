import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pytorch-svg',
  imports: [],
  templateUrl: './pytorch-svg.component.html',
  styleUrl: './pytorch-svg.component.scss'
})
export class PytorchSvgComponent {
 @Input() classes: string = '';
}
