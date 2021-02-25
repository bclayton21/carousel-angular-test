import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, group } from "@angular/animations";
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// Interfaces
import { SlideInterface } from '../../interfaces/carousel';

@Component({
	selector: 'app-carousel-slider',
	templateUrl: './carousel-slider.component.html',
	styleUrls: ['./carousel-slider.component.scss'],
	animations: [
		trigger('slideInFromRight', [
			transition('void => right', [
				style({ 
					right: '-100%'
				}),
				animate('200ms', style({
					right: '0%'
				}))
			]),
			transition('right => void', [
				animate('200ms', style({
					right: '100%'
				}))
			]),
			transition('void => left', [
				style({ 
					right: '100%'
				}),
				animate('200ms', style({
					right: '0%'
				}))
			]),
			transition('left => void', [
				animate('200ms', style({
					right: '-100%'
				}))
			])
		]),
		trigger('slideInFromLeft', [
			transition('void => left', [
				style({ 
					right: '100%'
				}),
				animate('200ms', style({
					right: '0%'
				}))
			]),
			transition('left => void', [
				animate('200ms', style({
					right: '-100%'
				}))
			]),
			transition('void => right', [
				style({ 
					right: '-100%'
				}),
				animate('200ms', style({
					right: '0%'
				}))
			]),
			transition('right => void', [
				animate('200ms', style({
					right: '100%'
				}))
			]),
		])
	]
})

export class CarouselSliderComponent implements OnInit {

	@ViewChild('carouselEl') carouselEl: any = null;
	@Input() slides: Array<SlideInterface> = [];

	// Variables
	interval_time: number = 4000;
	slider_interval: any = null;
	current_slide: number = 0;
	slide_direction: 'left' | 'right' = 'right';

	constructor(){}

	ngOnInit(): void {
		
		this.startInterval();

	}

	ngAfterViewInit(): void {

		// We want to attach the event listeners after the DOM has loaded
		if(this.carouselEl){

			if(this.carouselEl.nativeElement){

				// Clear the interval on mouseover
				fromEvent(this.carouselEl.nativeElement, 'mouseover').subscribe((e: any) => {
					clearInterval(this.slider_interval);
				});

				// Restart the interval on mouseout
				fromEvent(this.carouselEl.nativeElement, 'mouseout').subscribe((e: any) => {
					this.startInterval();
				});

			}

		}
		
	}

	startInterval(){

		this.slider_interval = setInterval(() => {

			if(this.slide_direction === 'left'){
				this.previous();
			} else if(this.slide_direction === 'right'){
				this.next();
			}

		}, this.interval_time);

	}

	previous() {
		this.slide_direction = 'left';
		const previous_index = this.current_slide - 1;
		this.current_slide = (previous_index < 0) ? this.slides.length - 1 : previous_index;
	}

	next() {
		this.slide_direction = 'right';
		const next_index = this.current_slide + 1;
		this.current_slide = (next_index === this.slides.length) ? 0 : next_index;
	}

	onSwipe(e: any){

		if(e){

			if(e.direction === Hammer.DIRECTION_LEFT){
				this.next();
			} else if(e.direction === Hammer.DIRECTION_RIGHT){
				this.previous();
			}

			// Also restart the interval so that it doesn't jump
			clearInterval(this.slider_interval);
			this.startInterval();

		}

	}

}
