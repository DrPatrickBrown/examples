// reducer functions
function reducer(state, action) {
	if (state === undefined) {
		return {
			count: 0
		};
	}

	var count = state.count;

	switch (action.type) {
		case "increase":
			return {
				count: count + action.amount
			};
		case "decrease":
			return {
				count: count - action.amount
			};
		default:
			return state;
	}
}

export default reducer;