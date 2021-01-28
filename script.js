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

function activateIndicator(index) {
	indicators.forEach((indicator, i) => {
		indicator.classList.toggle('active', i === index);
	});
	const titles = document.querySelectorAll('.title');
	titles.forEach((title, i) => {
		title.classList.toggle('active1', i === index);
	});
	const tags = document.querySelectorAll('.tag');
	tags.forEach((tag, i) => {
		tag.classList.toggle('activeone', i === index);
	});
}
