import React from 'react';
import { shallow } from 'enzyme';
import { CreateTodoPage } from '../../components/CreateTodo';
import { todos } from '../fixtures/todos';

describe('CreateTodo Component', () => {
    test('Should Render CreateTodo Component correctly', () => {
        const wrapper = shallow(<CreateTodoPage />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should submit with valid form', () => {
        const todo = todos[1];
        const createTodoSpy = jest.fn();
        const history = { push: jest.fn() };
        const wrapper = shallow(<CreateTodoPage createTodo={createTodoSpy} todo={todo} history={history}/>);
        wrapper.find('TodoForm').prop('onSubmit')(todo);
        expect(createTodoSpy).toHaveBeenLastCalledWith(todo);
        expect(history.push).toHaveBeenLastCalledWith('/');
    })
})