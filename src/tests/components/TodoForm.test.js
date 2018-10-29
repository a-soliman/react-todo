import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../../components/TodoForm';
import { todos } from '../fixtures/todos';

describe('TodoForm Component', () => {
    test('Should render TodoForm correctly', () => {
        const wrapper = shallow(<TodoForm />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render TodoForm with todo-data', () => {
        const todo = todos[1];
        const wrapper = shallow(<TodoForm todo={todo} />);
        expect(wrapper).toMatchSnapshot();
    });

    
});