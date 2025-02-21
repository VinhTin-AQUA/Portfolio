import { Component } from '@angular/core';
import { SvgComponent } from '../components/svgs/svg/svg.component';
import { hobbies } from './hobbies.data';
import { SdlSvgComponent } from "../components/svgs/sdl-svg/sdl-svg.component";

@Component({
  selector: 'app-hobbies',
  imports: [SvgComponent, SdlSvgComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
    hobbies: any = hobbies;
}
