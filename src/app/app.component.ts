import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	template: '<h1> Welcome to Angular Course by {{name}} </h1>'
})
export class AppComponent {
	name = 'Vishal Srinivasan';
}


