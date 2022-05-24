import { onlineTicks } from '/utils/tick.js';

const store = {
	money: 0,
	interval: 1000,
	exit: false,
};

function bindEvents() {
	document.querySelector('.startCounter').addEventListener('click', function () {
		store.exit = false;
		onlineTicks(store, function() { 
			store.money += 1;
			draw();
			store.interval *= 1.5;
		});
	});
	document.querySelector('.stopCounter').addEventListener('click', function () {
		store.exit = true;
	});
}

function draw() {
	document.querySelector('.money').innerHTML = store.money;
}

function init() {
	console.log('Application started');
	bindEvents();
	draw();
}

init();