import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces
import { CarouselXhrResponseInterface } from '../interfaces/carousel';

@Injectable({
	providedIn: 'root'
})
export class CarouselDataService {

	data: CarouselXhrResponseInterface = {
		"data": [
			{
				"title": "Spring 2021",
				"heading": "Aenean commodo iaculis dapibus. Cras lectus ipsum, posuere eget varius a, tristique quis magna.",
				"subhead": "",
				"media": {
					"desktop": "https://storage.googleapis.com/vcomm-assessment-assets/img0.jpg",
					"mobile": ""
				},
				"cta": [
					{
						"label": "Shop Womens",
						"url": "https://www.google.com/search?q=google+mens+spring+collection&oq=google+mens+spring+collection&aqs=chrome..69i57j69i64.5759j0j7&sourceid=chrome&ie=UTF-8"
					},
					{
						"label": "Shop Mens",
						"url": "https://www.google.com/search?ei=e500YMWqDIXA0PEP34el0Ak&q=google+womens+spring+collection&oq=google+womens+spring+collection&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANQ27AHWMG1B2D_twdoAnABeACAAfgBiAHfBZIBBTYuMC4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwiF1OS_rf_uAhUFIDQIHd9DCZoQ4dUDCA0&uact=5"
					}
				],
				"ctaPosition": "center"
			},
			{
				"title": "Back In Black",
				"subhead": "",
				"media": {
					"desktop": "https://storage.googleapis.com/vcomm-assessment-assets/img1.jpg",
					"mobile": ""
				},
				"cta": [
					{
						"label": "Shop The Collection",
						"url": "https://www.google.com/search?ei=ZQg1YObgBZPr9AOYkofoDQ&q=2021+collection&oq=2021+collection&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABCwAxBDOgUIABCRAjoFCC4QsQM6BQgAELEDOg4ILhCxAxCDARDHARCjAjoCCC46CAgAELEDEIMBOgQIABBDOggIABCxAxDJAzoICC4QsQMQgwE6CAguELEDEJMCOgUIABDJAzoFCAAQkgNQtHBYvKkBYNOvAWgEcAJ4AIABZ4gBvwuSAQQxNi4xmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwimp-K6k4DvAhWTNX0KHRjJAd0Q4dUDCA0&uact=5"
					}
				],
				"ctaPosition": "left"
			},
			{
				"title": "The New \"It\" Bag",
				"subhead": "",
				"media": {
					"desktop": "https://storage.googleapis.com/vcomm-assessment-assets/img2.jpg",
					"mobile": ""
				},
				"cta": [
					{
						"label": "Shop Handbags",
						"url": "https://www.google.com/search?ei=9p00YIbJCJTg9AOg8ZD4DA&q=handbags&oq=handbags&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAoQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQsQMyAggAMgIIADICCAAyAggAOgUIABCRAjoLCC4QsQMQxwEQowI6CAgAELEDEIMBOgQILhBDOgcILhCxAxBDOgUILhCxAzoICAAQsQMQkQI6AgguOggILhDHARCjAjoFCAAQyQM6BQgAEJIDOggIABCxAxDJA1CF2_4MWJH1_gxg6Pn-DGgAcAJ4AIABaIgBqAaSAQM2LjOYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=gws-wiz&ved=0ahUKEwiGnLT6rf_uAhUUMH0KHaA4BM8Q4dUDCA0&uact=5"
					}
				],
				"ctaPosition": "right"
			}
		],
		"version": "1.0.0"
	};

	constructor(private http: HttpClient){}

	public getCarouselImages(){

		return this.data;

		// return this.http.get('https://frontend-assessment-service.vcomm.io', {
		// 	responseType: 'json'
		// }).pipe(map((data: any) => {
		// 	console.log('getCarouselImages',data);
			
		// 	return data;
		// }));
	}
	
}