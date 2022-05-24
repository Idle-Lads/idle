import { draw } from '/utils/display.js';
import { startButton, stopButton, upgradeButton } from '/game/events.js';

// #TODO make the store automatically update all necessary "draws" when store is updated
const store = {
	money: 0,
	interval: 1000,
	exit: false,
	upgradeCost: 1
};

function bindEvents() {
	startButton(store);
	stopButton(store);
	upgradeButton(store);
}

function init() {
	console.log('Application started');
	bindEvents();
	draw('.money', store.money);
	draw('.upgradeCost', store.upgradeCost);
}

init();
