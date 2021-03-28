var carousel = document.querySelector('.gallery-preview');
var elements = Array.from(document.querySelectorAll('.slide'));
var indicators = Array.from(document.querySelectorAll('.dot'));
var arrow = document.querySelector('.arrow');

// Append name
function appendName(name) {
	var main = document.querySelector('.gallery-title-main');
	var textH1 = document.createElement('h1');
	textH1.classList.add('title');
	textH1.textContent = name;
	main.appendChild(textH1);
}

// Initialise
function initialise(data) {
	appendData(data);
	appendDataTag(data);
	activateIndicator(0);
}

// Fetch data
fetch('data.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		initialise(data);
	})
	.catch(function (err) {
		console.log(err);
	});

function appendData(data) {
	for (var i = 0; i < data.length; i++) {
		appendName(data[i].name);
	}
}

function appendDataTag(data) {
	var tag = document.querySelector('.gallery-title-tag');
	for (var i = 0; i < data.length; i++) {
		var tagG = document.createElement('div');
		tagG.textContent = data[i].tag;
		tagG.classList.add('tag');
		tag.appendChild(tagG);
	}
}

// Adjust container vh with browser's address bar
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function dropDown() {
	var header = document.querySelector('.dropdown-menu');
	if (header.style.display === 'block') {
		header.style.display = 'none';
		arrow.style.transform = 'none';
	} else {
		header.style.display = 'block';
		arrow.style.transform = 'rotate(180deg)';
	}
}

const observer = new IntersectionObserver(onIntersectionObserved, {
	root: carousel,
	threshold: 0.5,
});

elements.forEach((element) => {
	observer.observe(element);
});

function onIntersectionObserved(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const intersectingIndex = elements.indexOf(entry.target);
			activateIndicator(intersectingIndex);
		}
	});
}
// Assign json to intersectionObserver
function activateIndicator(index) {
	indicators.forEach((indicator, i) => {
		indicator.classList.toggle('active', i === index);
	});
	const titles = document.querySelectorAll('.title');
	titles.forEach((title, i) => {
		title.classList.toggle('activeMain', i === index);
	});
	const tags = document.querySelectorAll('.tag');
	tags.forEach((tag, i) => {
		tag.classList.toggle('activeTag', i === index);
	});
	const slide = document.querySelectorAll('.slide');
	slide.forEach((slide, i) => {
		slide.classList.toggle('slide-view', i === index);
	});
	const divs = document.querySelectorAll('.slide-inside');
	divs.forEach((div, i) => {
		div.classList.toggle('none', i === index);
	});
	const mobile = document.querySelectorAll('.mobile');
	mobile.forEach((mobile, i) => {
		mobile.classList.toggle('view', i === index);
	});
	const tablet = document.querySelectorAll('.tablet');
	tablet.forEach((tablet, i) => {
		tablet.classList.toggle('view', i === index);
	});
	const desktop = document.querySelectorAll('.desktop');
	desktop.forEach((desktop, i) => {
		desktop.classList.toggle('view', i === index);
	});
	const dots = document.querySelectorAll('.dots > div');
	dots.forEach((dot, i) => {
		dot.classList.toggle('selected', i === index);
	});
}

// Close button
function openDropDown() {
	var element = document.querySelector('.arrow-down-close');
	element.classList.toggle('open');
}
function callback() {
	const svg = document.getElementById('Layer_1');
	svg.classList.toggle('none-svg');
	const gallery = document.querySelector('.gallery-title');
	const container = document.querySelector('.container');
	gallery.classList.toggle('mod');
	container.classList.toggle('mod');
	const divs = document.querySelector('.none');
	Changetoggle(divs);
	divs.classList.toggle('block');

	function Changetoggle() {
		const mobile = document.querySelector('.view');
		mobile.classList.toggle('transition');
		const slide = document.querySelector('.slide-view');
		slide.classList.toggle('autoY');
		const gallery = document.querySelector('.gallery-preview');
		gallery.classList.toggle('hiddenX');
	}
	let mqd = window.matchMedia('(min-width: 1366px)');
	if (mqd.matches) {
		const animation = document.querySelector('.gallery-title-preview');
		animation.classList.toggle('mod');
	}
}
const category = document.querySelector('#about');
category.addEventListener('click', () => {
const about = document.querySelector('.about');
about.classList.toggle('about-none');
const category = document.querySelector('#about');
category.classList.toggle('about-background');
const project = document.querySelector('#projects');
project.classList.toggle('project-background');
const description = document.querySelector('.description');
description.classList.toggle('titles-none');
const dots = document.querySelector('.dots');
dots.classList.toggle('titles-none');
});
const projects = document.querySelector('#projects');
category.addEventListener('click', () => {
const about = document.querySelector('.about');
about.style.display = "none";
});
