import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('getGifs tests', () => {

	test('debería traer 6 elementos', async() => {
		const gifs = await getGifs('messi');
        expect(gifs.length).toBe(6);
	});
});
