import React from 'react';
import { shallow } from 'enzyme';
import { EditTodoPage } from '../../components/EditTodo';
import { todos } from '../fixtures/todos';

describe('EditTodoPage Component', () => {
    let history, onSubmit, onRemoveTodo;
    beforeEach(() => {
        history = { push: jest.fn() };
        onSubmit = jest.fn();
        onRemoveTodo = jest.fn();
    });

    test('Should render EditTodoPage correctlly', () => {
        const wrapper = shallow(<EditTodoPage history={history} editTodo={onSubmit} removeTodo={onRemoveTodo} todo={todos[1]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should RemoveTodo', () => {
        const todo = todos[2];
        const wrapper = shallow(<EditTodoPage history={history} editTodo={onSubmit} removeTodo={onRemoveTodo} todo={todo} />);
        wrapper.find('button').simulate('click');
        expect(onRemoveTodo).toHaveBeenLastCalledWith(todo.id);
    });

    test('Should EditTodo', () => {
        const todo = todos[1];
        const updates = { title: 'test title', note: 'test note' };
        const wrapper = shallow(<EditTodoPage history={history} editTodo={onSubmit} removeTodo={onRemoveTodo} todo={todo} />);
        wrapper.find('TodoForm').prop('onSubmit')(updates);
        expect(onSubmit).toHaveBeenLastCalledWith(todo.id, updates);
    });
});