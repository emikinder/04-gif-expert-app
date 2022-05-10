import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem tests', () => {
	const title = 'Titulo';
	const image = 'https://localhost/img.png';
	const wrapper = shallow(<GifGridItem title={title} image={image} />);

	test('debería mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debería tener un párrafo con el title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('debería tener una imagen con src y alt', () => {
		const img = wrapper.find('img');
		const { src, alt } = img.props();
		// expect( img.prop('src') ).toBe(image);
		expect(src).toBe(image);
		expect(alt).toBe(title);
	});

	test('debería contener la clase zoomIn', () => {
		const div = wrapper.find('div');
		const className = div.prop('className');
		// expect(className).toContain('animate__zoomIn')
		expect(className.includes('animate__zoomIn')).toBe(true);
	});
});
