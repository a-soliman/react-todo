import React from 'react';
import { shallow } from 'enzyme';
import { TodosList } from '../../components/TodosList';
import { todos } from '../fixtures/todos';

describe('TodoListComponent', () => {
    test('Should render TodoListCompoent correctly', () => {
        const wrapper = shallow(<TodosList todos={todos}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Should render todosList with empty message', () => {
        const wrapper = shallow(<TodosList todos={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});