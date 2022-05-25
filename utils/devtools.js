import { updateWholeStoreSubs, getStoreString } from '/utils/store.js';
import { draw } from '/utils/display.js';

function isInDev() {
	var params = new URLSearchParams(window.location.search);

	if (params.get('devmode') !== null) {
		return true;
	}

	return false;
}

function activateDevFunctions() {
	if (!isInDev()) {
		return;
	}
			
	const devTools = document.createElement('pre');
	devTools.classList.add('devTools');
	document.querySelector('.game').append(devTools);

	updateWholeStoreSubs([() => draw('.devTools', getStoreString('\t'))]);

	window.getStoreString = getStoreString;

	return;
}

export {
	activateDevFunctions
};
