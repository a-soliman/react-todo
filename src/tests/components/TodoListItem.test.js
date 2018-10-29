import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../components/TodoListItem';
import { todos } from '../fixtures/todos';

describe('TodoListItem Component', () => {
    test('Should render TodoListItem correctly', () => {
        const todo = todos[0];
        const wrapper = shallow(<TodoListItem {...todo} />);
        expect(wrapper).toMatchSnapshot();
    });
});