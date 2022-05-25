const store = {
	wholeStoreSubs: [],
	loaded: { value: false }
};

function getStoreValues() {
	const storeValues = {};

	for (let key in store) {
		if (store[key].value) {
			storeValues[key] = store[key].value;
		}
	}

	return storeValues;
}

function saveToLocalStorage() {
	const storeValues = JSON.stringify(getStoreValues());

	window.localStorage.setItem('idlestore', storeValues);
}

function initStoreValue(key, value, subs=[]) {
	if (store[key]) {
		console.error('Store already has entry by key', key);
		return;
	}

	const storeValues = JSON.parse(window.localStorage.getItem('idlestore'));

	if (storeValues && storeValues[key]) {
		value = storeValues[key];
	}

	store[key] = {
		value: value,
		subs: [...subs]
	};

	return;
}

function getStoreValue(key) {
	if (!store[key]) {
		console.error('No entry in store by key', key);
		return null;
	}

	return store[key].value;
}

function executeSubs(key) {
	if (!store[key]) {
		console.error('No entry in store by key', key);
		return;
	}

	const subs = store[key].subs;

	if (subs.length == 0) {
		return;
	} 

	for (let sub in subs) {
		subs[sub]();
	}

	return;
}

function updateStoreValue(key, value) {
	if (!store[key]) {
		console.error('No entry in store by key', key);
		return;
	}

	store[key].value = value;
	executeSubs(key);
	executeWholeStoreSubs();

	return;
}

function updateStoreSubs(key, subs) {
	if (!store[key]) {
		console.error('No entry in store by key', key);
		return;
	}

	store[key].subs.push(...subs);

	return;
}

function replacer(key, value) {
	if (typeof value === 'function') {
		return value.toString();
	}
	return value;
}

function getStoreString(seperator='') {
	return JSON.stringify(store, replacer, seperator);
}

function updateWholeStoreSubs(subs) {
	store.wholeStoreSubs.push(...subs);
}

function executeWholeStoreSubs() {
	const subs = store.wholeStoreSubs;

	if (subs.length == 0) {
		return;
	} 

	for (let sub in subs) {
		subs[sub]();
	}

	return;
}

export {
	initStoreValue,
	getStoreValue,
	updateStoreValue,
	updateStoreSubs,
	getStoreString,
	updateWholeStoreSubs,
	saveToLocalStorage
};
