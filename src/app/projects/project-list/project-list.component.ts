import { Component } from '@angular/core';
import { projects } from './projects-list.data';
import { SvgComponent } from '../../components/svgs/svg/svg.component';

@Component({
  selector: 'app-project-list',
  imports: [SvgComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
    projects: any = projects;
}
