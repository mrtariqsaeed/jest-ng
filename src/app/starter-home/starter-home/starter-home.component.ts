import { Component } from '@angular/core';

@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})
export class StarterHomeComponent {

	someFun() {
		return 5
	}

	anotherFun() {
		return 3
	}
}
