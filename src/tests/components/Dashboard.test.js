import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/Dashboard';

describe('Dashboard Component', () => {
    test('Should render Dashboard component correctly', () => {
        const wrapper = shallow(<DashboardPage />);
        expect(wrapper).toMatchSnapshot();
    });
});