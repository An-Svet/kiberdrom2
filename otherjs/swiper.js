new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clicable: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	slidesPerView: 1,
	spaceBetween: 1,
	centeredSlides: true,
	initialSlide: 1,
	loop: true,
	freeMode: false,
	speed: 500,
	effect: 'cube',
	cubeEffect: {
		SlideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: true,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 3,
		minRatio: 1,
	},
}
);

//!new version

// new Swiper(
// 	'.swiper', {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clicable: true,
// 	},
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 		draggable: true,
// 	},
// 	slidesPerView: 1,
// 	spaceBetween: 1,
// 	centeredSlides: true,
// 	initialSlide: 1,
// 	loop: true,
// 	freeMode: false,
// 	speed: 500,
// 	effect: 'cube',
// 	cubeEffect: {
// 		SlideShadows: true,
// 		shadow: true,
// 		shadowOffset: 20,
// 		shadowScale: 0.94,
// 	},
// 	preloadImages: true,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: true,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	zoom: {
// 		maxRatio: 3,
// 		minRatio: 1,
// 	},
// }
// );

