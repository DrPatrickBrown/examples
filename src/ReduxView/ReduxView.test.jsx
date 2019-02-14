import React from 'react';
import ReactDOM from 'react-dom';
import ReduxView from './ReduxView';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer"

var store = createStore(reducer);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store} >
			<ReduxView />
		</Provider>,
		div);
	ReactDOM.unmountComponentAtNode(div);
});