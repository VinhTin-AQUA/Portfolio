import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-grpc',
	imports: [],
	templateUrl: './grpc.component.html',
	styleUrl: './grpc.component.scss',
})
export class GrpcComponent {
	@Input() classes: string = '';
}
