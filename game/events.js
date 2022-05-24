import { draw } from '/utils/display.js';
import { onlineTicks } from '/utils/tick.js';

function startButton(store) {
	document.querySelector('.startCounter').addEventListener('click', function () {
		store.exit = false;
		onlineTicks(store, function() { 
			store.money += 1;
			draw('.money', store.money);
		});
	});
}

function stopButton(store) {
	document.querySelector('.stopCounter').addEventListener('click', function () {
		store.exit = true;
	});
}

function upgradeButton(store) {
	document.querySelector('.buyUpgrade').addEventListener('click', function () {
		if (store.upgradeCost > store.money) {
			draw('.warningText', 'Not enough money!');
		}

		draw('.warningText', '');

		store.money -= store.upgradeCost;
		store.interval -= 50;
		store.upgradeCost *= 2;

		draw('.upgradeCost', store.upgradeCost);
		draw('.money', store.money);
	});
}

export {
	startButton,
	stopButton,
	upgradeButton
};
