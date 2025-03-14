import { Component } from '@angular/core';
import { SvgComponent } from '../components/svgs/svg/svg.component';
import { hobbies } from './hobbies.data';

@Component({
  selector: 'app-hobbies',
  imports: [SvgComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
    hobbies: any = hobbies;
}
