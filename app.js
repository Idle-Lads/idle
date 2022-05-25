import { drawFromStore } from '/utils/display.js';
import { startButton, stopButton, upgradeButton } from '/game/events.js';
import { initStoreValue, updateWholeStoreSubs, saveToLocalStorage, getStoreValue } from '/utils/store.js';

import { activateDevFunctions } from '/utils/devtools.js';

function bindEvents() {
	startButton();
	stopButton();
	upgradeButton();

	return;
}

function initializeStore() {
	if (getStoreValue('loaded')) {
		return;
	}

	initStoreValue('money', 0, [() => drawFromStore('.money', 'money')]);
	initStoreValue('upgradeCost', 1, [() => drawFromStore('.upgradeCost', 'upgradeCost')]);

	initStoreValue('interval', 1000);
	initStoreValue('exit', false);

	return;
}

function initializeDraw() {
	drawFromStore('.money', 'money');
	drawFromStore('.upgradeCost', 'upgradeCost');
	
	return;
}

function init() {
	console.log('Application started');
	
	bindEvents();

	initializeStore();
	initializeDraw();

	document.querySelector('.startCounter').disabled = false;
	document.querySelector('.stopCounter').disabled = true;

	activateDevFunctions();

	updateWholeStoreSubs([saveToLocalStorage]);

	return;
}

init();
