import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-firebase-svg',
  imports: [],
  templateUrl: './firebase-svg.component.html',
  styleUrl: './firebase-svg.component.scss'
})
export class FirebaseSvgComponent {
    @Input() classes: string = '';
}
