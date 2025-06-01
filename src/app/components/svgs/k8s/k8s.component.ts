import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-k8s',
	imports: [],
	templateUrl: './k8s.component.html',
	styleUrl: './k8s.component.scss',
})
export class K8sComponent {
	@Input() classes: string = '';
}
