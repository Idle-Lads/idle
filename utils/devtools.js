import { updateWholeStoreSubs, getStoreString } from '/utils/store.js';
import { draw } from '/utils/display.js';

function isInDev() {
	var params = new URLSearchParams(window.location.search);

	if (params.get('devmode') !== null) {
		return true;
	}

	return false;
}

function wipe() {
	var params = new URLSearchParams(window.location.search);

	if (params.get('wipe') !== null) {
		window.localStorage.removeItem('idlestore');
		params.delete('wipe');

		window.location.href = window.location.origin + window.location.pathname + '?' + params.toString();
	}
}

function activateDevFunctions() {
	if (!isInDev()) {
		return;
	}
			
	const devTools = document.createElement('pre');
	devTools.classList.add('devTools');
	document.querySelector('.game').append(devTools);

	updateWholeStoreSubs([() => draw('.devTools', getStoreString('\t'))]);

	wipe();

	window.getStoreString = getStoreString;

	return;
}

export {
	activateDevFunctions
};
