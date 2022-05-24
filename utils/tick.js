var MINIMUM_INTERVAL = 300;

function onlineTicks(intervalStore, cb) {
	var interval = intervalStore.interval;

	if (interval < MINIMUM_INTERVAL) {
		console.warn('Attempted to use interval lower than minimum interval, setting interval to minimum');
		interval = MINIMUM_INTERVAL;
	}

	if (intervalStore.exit === true) {
		console.log('Ticks stopped');
		return;
	}

	cb();
	setTimeout(() => {
		onlineTicks(intervalStore, cb);
	}, interval);
}

// #TODO: Implement offline tick calculator
// function offlineTicks(interval, cb) {
// 	
// }

export {
	onlineTicks
};