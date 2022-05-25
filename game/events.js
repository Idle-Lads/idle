import { draw } from '/utils/display.js';
import { onlineTicks } from '/utils/tick.js';
import { getStoreValue, updateStoreValue } from '/utils/store.js';

function startButton() {
	document.querySelector('.startCounter').addEventListener('click', function () {
		updateStoreValue('exit', false);
		onlineTicks(function() { 
			var money = getStoreValue('money');
			updateStoreValue('money', money + 1);
		});

		document.querySelector('.startCounter').disabled = true;
		document.querySelector('.stopCounter').disabled = false;
	});

	return;
}

function stopButton() {
	document.querySelector('.stopCounter').addEventListener('click', function () {
		updateStoreValue('exit', true);
		document.querySelector('.startCounter').disabled = false;
		document.querySelector('.stopCounter').disabled = true;
	});

	return;
}

function upgradeButton() {
	document.querySelector('.buyUpgrade').addEventListener('click', function () {
		var upgradeCost = getStoreValue('upgradeCost'),
			money = getStoreValue('money'),
			interval = getStoreValue('interval');

		if (upgradeCost > money) {
			draw('.warningText', 'Not enough money!');
			return;
		}

		draw('.warningText', '');

		updateStoreValue('money', money - upgradeCost);
		updateStoreValue('interval', interval - 50);
		updateStoreValue('upgradeCost', upgradeCost * 2);
	});

	return;
}

export {
	startButton,
	stopButton,
	upgradeButton
};
