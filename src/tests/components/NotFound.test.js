import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFound';

describe('NotFoundPage', () => {
    test('Should render NotFoundPage correctly', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
});