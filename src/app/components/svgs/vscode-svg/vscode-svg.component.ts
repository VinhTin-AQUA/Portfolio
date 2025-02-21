import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vscode-svg',
  imports: [],
  templateUrl: './vscode-svg.component.html',
  styleUrl: './vscode-svg.component.scss'
})
export class VscodeSvgComponent {
    @Input() classes: string = '';
}
