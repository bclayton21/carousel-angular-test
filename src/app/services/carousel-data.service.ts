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

	constructor(private http: HttpClient){}

	public getCarouselImages(){

		return this.http.get('https://frontend-assessment-service.vcomm.io', {
			responseType: 'json'
		}).pipe(map((data: any) => {			
			return data;
		}));
		
	}

	public getCarCarouselImages(){

		return this.http.get('https://frontend-assessment-service.vcomm.io/cars', {
			responseType: 'json'
		}).pipe(map((data: any) => {			
			return data;
		}));

	}
	
}
