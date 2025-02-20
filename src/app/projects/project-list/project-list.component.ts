import { Component } from '@angular/core';
import { projects } from './projects-list.data';
import { SvgLogoComponent } from '../../components/svg-logo/svg-logo.component';
import { ToolLogoComponent } from '../../components/tool-logo/tool-logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [SvgLogoComponent, ToolLogoComponent, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
    projects: any = projects;
}
