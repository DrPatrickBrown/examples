import configureStore from 'redux-mock-store';
import { createActionIncrease, createActionDecrease } from "./ConnectedCounter";

const mockStore = configureStore();
const store = mockStore();

test('Dispatches the INCREASE action and payload', () => {
	const expectedActions = [
		{
			'type': 'increase',
			'amount': 2
		}
	];

	store.dispatch(createActionIncrease(2));
	expect(store.getActions()).toEqual(expectedActions);
});

// don't know why this clear did not work
// store.clearActions();

test('Dispatches the DECREASE action and payload', () => {
	const expectedActions = [
		{
			'type': 'increase',
			'amount': 2
		},
		{
			'type': 'decrease',
			'amount': 1
		}
	];

	store.dispatch(createActionDecrease(1));
	expect(store.getActions()).toEqual(expectedActions);
});
