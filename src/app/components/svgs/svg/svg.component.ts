import { Component, Input } from '@angular/core';
import { AndroidStudioSvgComponent } from '../android-studio-svg/android-studio-svg.component';
import { AngularSvgComponent } from '../angular-svg/angular-svg.component';
import { DockerSvgComponent } from '../docker-svg/docker-svg.component';
import { ExperienceSvgComponent } from '../experience-svg/experience-svg.component';
import { HobbySvgComponent } from '../hobby-svg/hobby-svg.component';
import { HomeSvgComponent } from '../home-svg/home-svg.component';
import { HoppscotchSvgComponent } from '../hoppscotch-svg/hoppscotch-svg.component';
import { LinuxSvgComponent } from '../linux-svg/linux-svg.component';
import { MinioSvgComponent } from '../minio-svg/minio-svg.component';
import { MongodbSvgComponent } from '../mongodb-svg/mongodb-svg.component';
import { NestjsSvgComponent } from '../nestjs-svg/nestjs-svg.component';
import { NginxSvgComponent } from '../nginx-svg/nginx-svg.component';
import { ProjectSvgComponent } from '../project-svg/project-svg.component';
import { RedisInsightSvgComponent } from '../redis-insight-svg/redis-insight-svg.component';
import { SqlSvgComponent } from '../sql-svg/sql-svg.component';
import { VisualStudioSvgComponent } from '../visual-studio-svg/visual-studio-svg.component';
import { VscodeSvgComponent } from '../vscode-svg/vscode-svg.component';
import { NetCoreSvgComponent } from '../net-core-svg/net-core-svg.component';
import { RedisSvgComponent } from '../redis-svg/redis-svg.component';
import { PythonSvgComponent } from '../python-svg/python-svg.component';
import { KafkaSvgComponent } from '../kafka-svg/kafka-svg.component';
import { CSharpSvgComponent } from '../c-sharp-svg/c-sharp-svg.component';
import { DartSvgComponent } from '../dart-svg/dart-svg.component';
import { FlutterSvgComponent } from '../flutter-svg/flutter-svg.component';
import { FirebaseSvgComponent } from '../firebase-svg/firebase-svg.component';
import { CPlusPlusSvgComponent } from '../c-plus-plus-svg/c-plus-plus-svg.component';
import { SdlSvgComponent } from '../sdl-svg/sdl-svg.component';
import { CodingSvgComponent } from '../coding-svg/coding-svg.component';
import { PhotographySvgComponent } from '../photography-svg/photography-svg.component';
import { RunningSvgComponent } from '../running-svg/running-svg.component';
import { GymSvgComponent } from '../gym-svg/gym-svg.component';
import { FruitSvgComponent } from '../fruit-svg/fruit-svg.component';
import { GamingSvgComponent } from '../gaming-svg/gaming-svg.component';
import { TailwindSvgComponent } from '../tailwind-svg/tailwind-svg.component';
import { SkillSvgComponent } from '../skill-svg/skill-svg.component';

@Component({
	selector: 'app-svg',
	imports: [
		AndroidStudioSvgComponent,
		AngularSvgComponent,
		DockerSvgComponent,
		ExperienceSvgComponent,
		HobbySvgComponent,
		HomeSvgComponent,
		HoppscotchSvgComponent,
		LinuxSvgComponent,
		MinioSvgComponent,
		MongodbSvgComponent,
		NestjsSvgComponent,
		RedisSvgComponent,
		NetCoreSvgComponent,
		NginxSvgComponent,
		ProjectSvgComponent,
		RedisInsightSvgComponent,
		SqlSvgComponent,
		VisualStudioSvgComponent,
		VscodeSvgComponent,
		PythonSvgComponent,
		KafkaSvgComponent,
		CSharpSvgComponent,
		DartSvgComponent,
		FlutterSvgComponent,
		FirebaseSvgComponent,
		CPlusPlusSvgComponent,
		SdlSvgComponent,
        CodingSvgComponent,
        PhotographySvgComponent,
        RunningSvgComponent,
        GymSvgComponent,
        FruitSvgComponent,
        GamingSvgComponent,
        TailwindSvgComponent,
        SkillSvgComponent,
	],
	templateUrl: './svg.component.html',
	styleUrl: './svg.component.scss',
})
export class SvgComponent {
	@Input() name: string = '';
	@Input() classes: string = '';
	@Input() stroke: string = '';
	@Input() fill: string = '';

    constructor(){
    }
}
