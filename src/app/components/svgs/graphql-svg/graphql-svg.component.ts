import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-graphql-svg',
	imports: [],
	templateUrl: './graphql-svg.component.html',
	styleUrl: './graphql-svg.component.scss',
})
export class GraphqlSvgComponent {
	@Input() classes: string = '';
}
