import React from 'react';
import ReactDOM from 'react-dom';
import ReduxView from './ReduxView';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render( < ReduxView / > , div);
	ReactDOM.unmountComponentAtNode(div);
});