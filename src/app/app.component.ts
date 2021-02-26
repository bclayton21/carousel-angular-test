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
	shopping_data_source: any;
	cars_data_source: any;
	data_source: 'shopping' | 'cars' = 'shopping';


	constructor(private carousel_service: CarouselDataService){}

	ngOnInit(): void {

		this.getData();

	}

	toggleDataSource(){

		if(this.data_source === 'shopping'){
			this.data_source = 'cars';
		} else if(this.data_source === 'cars'){
			this.data_source = 'shopping';
		}

		this.getData();

	}

	getData(){

		if(this.data_source === 'shopping'){

			this.shopping_data_source = this.carousel_service.getCarouselImages();
			
			this.shopping_data_source.subscribe((result: any) => {
				this.slides = result.data;
			});
			
		} else if(this.data_source === 'cars'){

			this.cars_data_source = this.carousel_service.getCarCarouselImages();
			
			this.cars_data_source.subscribe((result: any) => {
				this.slides = result.data;
			});

		}
		

	}
}
