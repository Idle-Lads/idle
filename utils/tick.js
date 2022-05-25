import { getStoreValue } from '/utils/store.js';

var MINIMUM_INTERVAL = 300;

function onlineTicks(cb) {
	var interval = getStoreValue('interval'),
		exit = getStoreValue('exit');

	if (interval < MINIMUM_INTERVAL) {
		console.warn('Attempted to use interval lower than minimum interval, setting interval to minimum');
		interval = MINIMUM_INTERVAL;
	}

	if (exit === true) {
		console.log('Ticks stopped');
		return;
	}

	setTimeout(() => {
		cb();
		onlineTicks(cb);
	}, interval);

	return;
}

// #TODO: Implement offline tick calculator
// function offlineTicks(interval, cb) {
// 	
// }

export {
	onlineTicks
};
