import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from '../../components/HeaderComponent';

describe('HeaderComponent', () => {
    test('Should render HeaderComponent correctly', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});