import { getStoreValue } from '/utils/store.js';

function draw(className, value) {
	document.querySelector(className).innerHTML = value;

	return;
}

function drawFromStore(className, storeKey) {
	let value = getStoreValue(storeKey);

	if (value === null) {
		console.error('Failed to retrieve value from store using key', storeKey);
		return;
	}

	draw(className, value);

	return;
}

export {
	draw,
	drawFromStore
};
