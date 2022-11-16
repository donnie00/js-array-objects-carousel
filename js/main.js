const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morales",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
let activeIndex = 0;

const slideContainerEl = document.querySelector('.slide-container');
const thumbContainerEL = document.querySelector('.thumb-container');
const slideArray = slideContainerEl.childNodes;
const thumbArray = thumbContainerEL.childNodes;

console.log(thumbArray);

const sliderBtns = document.querySelectorAll('button');

function createSlide(array, i) {
	const slide = document.createElement('div');
	const slideText = document.createElement('div');
	slide.classList.add('slide', 'invisible', 'text-light');
	slideText.classList.add('slide-text');

	const img = document.createElement('img');
	const h2 = document.createElement('h2');
	const txt = document.createElement('p');

	img.src = array[i].image;
	h2.innerText = array[i].title;
	txt.innerText = array[i].text;

	slideText.append(h2, txt);

	slide.append(img, slideText);

	return slide;
}

function createImg(array, i) {
	const thumbImg = document.createElement('img');
	const imgSrcArray = array.map((element) => element.image);
	const imgSrc = imgSrcArray[i];

	thumbImg.src = imgSrc;
	thumbImg.classList.add('img-fluid');

	thumbImg.addEventListener('click', function () {
		toggleActive(this, 'active');
	});
	return thumbImg;
}

function toggleActive(slide, toAddClass) {
	slide.classList.toggle(toAddClass);
}

function changeSlide(btnPressed) {
	if (btnPressed === 'upBtn') {
		toggleActive(slideArray[activeIndex], 'invisible');

		activeIndex -= 1;
		if (activeIndex < 0) {
			activeIndex = slideArray.length - 1;
		}
	} else {
		toggleActive(slideArray[activeIndex], 'invisible');

		activeIndex += 1;
		if (activeIndex > slideArray.length - 1) {
			activeIndex = 0;
		}
	}
}

for (let i = 0; i < images.length; i++) {
	slideContainerEl.append(createSlide(images, i));
	thumbContainerEL.append(createImg(images, i));

	toggleActive(slideArray[activeIndex], 'invisible');
}

sliderBtns.forEach((element) => {
	element.addEventListener('click', function (e) {
		changeSlide(e.target.id);
		toggleActive(slideArray[activeIndex], 'invisible');
	});
});
