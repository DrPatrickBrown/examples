import React from 'react';
import { shallow, mount } from 'enzyme';
import HistoricDateRange from './HistoricDateRange';

// shallow tests, i.e pure unit tests of HistoricDateRange, excluding its two child HistoricYear components

test('default props correctly set the unsignedYear prop of each child HistoricYear component', () => {
	const wrapper = shallow(< HistoricDateRange />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	const toHistoricYear = wrapper.find('HistoricYear#to');

	expect(fromHistoricYear.prop('signedYear')).toBe(undefined);
	expect(toHistoricYear.prop('signedYear')).toBe(undefined);
});

test('custom props correctly set the unsignedYear prop of each child HistoricYear component', () => {
	const wrapper = shallow(< HistoricDateRange fromYear={-1000} toYear={-500} />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	const toHistoricYear = wrapper.find('HistoricYear#to');

	expect(fromHistoricYear.prop('signedYear')).toBe(-1000);
	expect(toHistoricYear.prop('signedYear')).toBe(-500);
});

test('onChange event from fromYear HistoricYear component causes state update and onChange prop to be called', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = shallow(< HistoricDateRange fromYear={-10} toYear={150} onChange={mockOnChangeHandler} />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	fromHistoricYear.simulate('change', 43);
	expect(mockOnChangeHandler).toBeCalledWith({ fromYear: 43, toYear: 150 });
	expect(wrapper.state('fromYear')).toBe(43);
	expect(wrapper.state('toYear')).toBe(150);
})

test('onChange event from toYear HistoricYear component causes state update and onChange prop to be called', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = shallow(< HistoricDateRange fromYear={1250} toYear={1500} onChange={mockOnChangeHandler} />);

	const toHistoricYear = wrapper.find('HistoricYear#to');
	toHistoricYear.simulate('change', 1450);
	expect(mockOnChangeHandler).toBeCalledWith({ fromYear: 1250, toYear: 1450 });
	expect(wrapper.state('fromYear')).toBe(1250);
	expect(wrapper.state('toYear')).toBe(1450);
})

test('displays a warning when toYear prop is earlier than fromYear prop', () => {
	const wrapper = shallow(< HistoricDateRange fromYear={-50} toYear={-150} />);

	expect(wrapper.containsMatchingElement(<div> warning: to year is earlier than from year </div>)).toBe(true);
})

test('does not display a warning when fromYear prop is earlier than toYear prop', () => {
	const wrapper = shallow(< HistoricDateRange fromYear={50} toYear={150} />);

	expect(wrapper.containsMatchingElement(<div> warning: to year is earlier than from year </div>)).toBe(false);
})

test('does not display a warning if one of the year props is not populated', () => {
	const wrapper = shallow(< HistoricDateRange fromYear={50} />);

	expect(wrapper.containsMatchingElement(<div> warning: to year is earlier than from year </div>)).toBe(false);
})

test('displays a warning when user input leads to the toYear prop being earlier than fromYear prop', () => {
	const wrapper = shallow(< HistoricDateRange fromYear={50} toYear={150} />);
	const toHistoricYear = wrapper.find('HistoricYear#to');
	toHistoricYear.simulate('change', -150);

	expect(wrapper.containsMatchingElement(<div> warning: to year is earlier than from year </div>)).toBe(true);
	expect(wrapper.state('toYear')).toBe(-150);
})

// mount tests, i.e. integration tests of HistoricDateRange and its two child HistoricYear components

test('renders default props as two empty years with epoch of AD', () => {
	const wrapper = mount(< HistoricDateRange />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	const toHistoricYear = wrapper.find('HistoricYear#to');

	const fromInputElement = fromHistoricYear.find('input');
	const fromSelectElement = fromHistoricYear.find('select');
	const fromPeriodSpan = fromHistoricYear.find('span#period');

	expect(fromInputElement.prop('value')).toBe("");
	expect(fromSelectElement.prop('value')).toBe("AD");
	expect(fromPeriodSpan.exists()).toBe(false);

	const toInputElement = toHistoricYear.find('input');
	const toSelectElement = toHistoricYear.find('select');
	const toPeriodSpan = toHistoricYear.find('span#period');

	expect(toInputElement.prop('value')).toBe("");
	expect(toSelectElement.prop('value')).toBe("AD");
	expect(toPeriodSpan.exists()).toBe(false);

	wrapper.unmount();
});

test('renders range -50 to 175 as 50 BC Iron Age to 175 AD Roman', () => {
	const wrapper = mount(< HistoricDateRange fromYear={-50} toYear={175} />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	const toHistoricYear = wrapper.find('HistoricYear#to');

	const fromInputElement = fromHistoricYear.find('input');
	const fromSelectElement = fromHistoricYear.find('select');

	expect(fromInputElement.prop('value')).toBe(50);
	expect(fromSelectElement.prop('value')).toBe("BC");
	expect(fromHistoricYear.containsMatchingElement(<span id="period"> period: Iron Age </span>)).toBe(true);

	const toInputElement = toHistoricYear.find('input');
	const toSelectElement = toHistoricYear.find('select');

	expect(toInputElement.prop('value')).toBe(175);
	expect(toSelectElement.prop('value')).toBe("AD");
	expect(toHistoricYear.containsMatchingElement(<span id="period"> period: Roman </span>)).toBe(true);

	wrapper.unmount();
});

test('entering a value in the input of the from HistoricYear results in an onChange from HistoricDateRange with the new value', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = mount(< HistoricDateRange fromYear={1500} toYear={1550} onChange={mockOnChangeHandler} />);

	const fromHistoricYear = wrapper.find('HistoricYear#from');
	const fromInputElement = fromHistoricYear.find('input');
	fromInputElement.simulate('change', { target: { value: "1450" } });

	expect(mockOnChangeHandler).toBeCalledWith({ fromYear: 1450, toYear: 1550 });
	expect(wrapper.state('fromYear')).toBe(1450);
	expect(wrapper.state('toYear')).toBe(1550);

	wrapper.unmount();
});

test('entering a value in the input of the to HistoricYear results in an onChange from HistoricDateRange with the new value', () => {
	const mockOnChangeHandler = jest.fn();
	const wrapper = mount(< HistoricDateRange fromYear={-2500} toYear={-1500} onChange={mockOnChangeHandler} />);

	const toHistoricYear = wrapper.find('HistoricYear#to');
	const toInputElement = toHistoricYear.find('input');
	toInputElement.simulate('change', { target: { value: "1000" } });

	expect(mockOnChangeHandler).toBeCalledWith({ fromYear: -2500, toYear: -1000 });
	expect(wrapper.state('fromYear')).toBe(-2500);
	expect(wrapper.state('toYear')).toBe(-1000);

	wrapper.unmount();
});


