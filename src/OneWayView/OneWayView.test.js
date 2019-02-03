import React from 'react';
import ReactDOM from 'react-dom';
import OneWayView from './OneWayView';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render( < OneWayView / > , div);
	ReactDOM.unmountComponentAtNode(div);
});