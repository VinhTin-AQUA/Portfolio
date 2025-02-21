import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minio-svg',
  imports: [],
  templateUrl: './minio-svg.component.html',
  styleUrl: './minio-svg.component.scss'
})
export class MinioSvgComponent {
    @Input() classes: string = '';
}
