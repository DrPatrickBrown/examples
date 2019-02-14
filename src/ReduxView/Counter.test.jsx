import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';


test('a step of 1 provides an increase/decrease amount of 1', () => {
	const mockOnDecreaseHandler = jest.fn();
	const mockOnIncreaseHandler = jest.fn();
	const wrapper = shallow(< Counter countValue={0} step={1} onDecrease={mockOnDecreaseHandler} onIncrease={mockOnIncreaseHandler} />);

	const inputElement = wrapper.find('input');
	const decreaseButton = wrapper.find('button#decrease');
	const increaseButton = wrapper.find('button#increase');

	expect(inputElement.prop('value')).toBe(0);

	decreaseButton.simulate('click');
	expect(mockOnDecreaseHandler).toBeCalledWith(1);

	increaseButton.simulate('click');
	expect(mockOnIncreaseHandler).toBeCalledWith(1);

});

test('a step of 2 provides an increase/decrease amount of 2', () => {
	const mockOnDecreaseHandler = jest.fn();
	const mockOnIncreaseHandler = jest.fn();
	const wrapper = shallow(< Counter countValue={0} step={2} onDecrease={mockOnDecreaseHandler} onIncrease={mockOnIncreaseHandler} />);

	const inputElement = wrapper.find('input');
	const decreaseButton = wrapper.find('button#decrease');
	const increaseButton = wrapper.find('button#increase');

	expect(inputElement.prop('value')).toBe(0);

	decreaseButton.simulate('click');
	expect(mockOnDecreaseHandler).toBeCalledWith(2);

	increaseButton.simulate('click');
	expect(mockOnIncreaseHandler).toBeCalledWith(2);
});

