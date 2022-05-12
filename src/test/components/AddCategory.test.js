import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory tests', () => {
	const setCategories = jest.fn();
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('debería mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debería cambiar el input', () => {
		const input = wrapper.find('input');
		const value = 'Hola';
		input.simulate('change', { target: { value } });
		expect(wrapper.find('p').text().trim()).toBe(value);
	});

	test('no debería hacer POST con submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('debería llamar a setCategories y limpiar el input', () => {
		const value = 'Test';
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).toHaveBeenCalled();
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
