import reducer from "./reducer";
import { createActionIncrease, createActionDecrease } from "./ReduxView/ConnectedCounter";

test('check that an "increase" action correctly updates the state', () => {
	const action = createActionIncrease(1);
	const beforeState = {
		count: 1
	}
	const expectedAfterState = {
		count: 2
	};

	expect(reducer(beforeState, action)).toEqual(expectedAfterState);
});

test('check that a "decrease" action correctly updates the state', () => {
	const action = createActionDecrease(2);
	const beforeState = {
		count: 1
	}
	const expectedAfterState = {
		count: -1
	};

	expect(reducer(beforeState, action)).toEqual(expectedAfterState);
});

test('check that current state is maintained for an unrecognised action', () => {
	const action = { type: 'unknown_action' };
	const beforeState = {
		count: 1
	}
	const expectedAfterState = {
		count: 1
	};

	expect(reducer(beforeState, action)).toEqual(expectedAfterState);
});

test('check that initial state is 0', () => {
	const action = { type: 'unknown_action' };
	const expectedInitialState = {
		count: 0
	};

	expect(reducer(undefined, action)).toEqual(expectedInitialState);
});