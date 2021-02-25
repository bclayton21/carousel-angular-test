import { Component } from '@angular/core';

// Interfaces
import { SlideInterface } from '../app/interfaces/carousel';

// Services
import { CarouselDataService } from '../app/services/carousel-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public slides: Array<SlideInterface> = [];

	constructor(private carousel_service: CarouselDataService){}

	ngOnInit(): void {

		// this.carousel_service.getCarouselImages().subscribe((data) => {
		// 	console.log('App', data);
		// });

		const result = this.carousel_service.getCarouselImages();

		this.slides = result.data;

	}
}
