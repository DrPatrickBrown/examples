import React from 'react';
import { shallow } from 'enzyme';
import HistoricYear from './HistoricYear';


test('renders default props as an empty year with epoch of AD', () => {
	const wrapper = shallow(< HistoricYear />);

	const inputElement = wrapper.find('input');
	const selectElement = wrapper.find('select');

	expect(inputElement.prop('value')).toBe("");
	expect(selectElement.prop('value')).toBe("AD");
	expect(wrapper.containsMatchingElement(<span className="input-group-text"> period: </span>)).toBe(true);
});

test('renders a signedYear prop of -100 as 100 BC iron age', () => {
	const wrapper = shallow(< HistoricYear signedYear={-100} />);

	const inputElement = wrapper.find('input');
	const selectElement = wrapper.find('select');

	expect(inputElement.prop('value')).toBe(100);
	expect(selectElement.prop('value')).toBe("BC");
	expect(wrapper.containsMatchingElement(<span className="input-group-text"> period: Iron Age </span>)).toBe(true);
});

test('renders a signedYear prop of 0 as 0 AD iron age', () => {
	const wrapper = shallow(< HistoricYear signedYear={0} />);

	const inputElement = wrapper.find('input');
	const selectElement = wrapper.find('select');

	expect(inputElement.prop('value')).toBe(0);
	expect(selectElement.prop('value')).toBe("AD");
	expect(wrapper.containsMatchingElement(<span className="input-group-text"> period: Iron Age </span>)).toBe(true);
});

test('user entering 1066 as a year, when epoch is AD, results in onChange prop being called with 1066', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = shallow(< HistoricYear onChange={mockOnChangeHandler} />);

	const inputElement = wrapper.find('input');

	inputElement.simulate('change', { target: { value: "1066" } });
	expect(mockOnChangeHandler).toBeCalledWith(1066);
});

test('user selecting BC, when year is 1066, results in onChange prop being called with -1066', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = shallow(< HistoricYear signedYear={1066} onChange={mockOnChangeHandler} />);

	const selectElement = wrapper.find('select');

	selectElement.simulate('change', { target: { value: "BC" } });
	expect(mockOnChangeHandler).toBeCalledWith(-1066);
});

