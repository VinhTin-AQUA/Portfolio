import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-python-svg',
  imports: [],
  templateUrl: './python-svg.component.html',
  styleUrl: './python-svg.component.scss'
})
export class PythonSvgComponent {
    @Input() classes: string = '';
}
