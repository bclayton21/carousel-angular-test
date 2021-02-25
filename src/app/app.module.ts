import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

// External 3rd Party
import * as Hammer from 'hammerjs'; 
import { 
	HammerModule,
	HammerGestureConfig,
	HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { CarouselSlideComponent } from './components/carousel-slider/slide/carousel-slide.component';

@Injectable() 
export class HammerConfig extends HammerGestureConfig { 
	overrides = <any> { 
		swipe: { direction: Hammer.DIRECTION_HORIZONTAL }
	};
} 

@NgModule({
	declarations: [
		AppComponent,
		CarouselSliderComponent,
		CarouselSlideComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HammerModule
	],
	providers: [
		{ 
			provide: HAMMER_GESTURE_CONFIG, 
			useClass: HammerConfig, 
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
