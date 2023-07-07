function choice (items) {
	if (items.length === 0) {
		return undefined;
	}
	const rIdx = Math.floor(Math.random() * items.length);
	return items[rIdx];
}

function remove (items, item) {
	const index = items.indexOf(item);
	if (index === -1) {
		return undefined;
	}
	return items.splice(index, 1)[0];
}

module.exports = {
	choice,
	remove
};
