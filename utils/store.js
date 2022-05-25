const store = {};

function initStoreValue(key, value, subs=[]) {
	if (store[key]) {
		console.error('Store already has entry by key', key);
		return;
	}

	store[key] = {
		value: value,
		subs: [...subs]
	};

	return;
}

function getStoreValue(key) {
	console.log(store, key, store[key]);

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
	executeSubs();

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

export {
	initStoreValue,
	getStoreValue,
	updateStoreValue,
	updateStoreSubs
};
