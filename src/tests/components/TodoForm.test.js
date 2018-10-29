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

    test('Should render error for invalid form submission', () => {
        const e = {
            preventDefault: () => {}
        };
        const wrapper = shallow(<TodoForm />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('form').simulate('submit', e);
        expect(wrapper.state('error').length).toBeGreaterThan(0);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should setState onTitleChange', () => {
        const title = 'Test Title';
        const e = {
            target: {
                value: title
            }
        };
        const wrapper = shallow(<TodoForm />);
        wrapper.find('input').at(0).simulate('change', e);
        expect(wrapper.state('title')).toBe(title);
        expect(wrapper.state('error').length).toBe(0);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should setState onNoteChange', () => {
        const note = 'Test note';
        const e = {
            target: {
                value: note
            }
        };
        const wrapper = shallow(<TodoForm />);
        wrapper.find('textarea').simulate('change', e);
        expect(wrapper.state('note')).toBe(note);
        expect(wrapper.state('error').length).toBe(0);
        expect(wrapper).toMatchSnapshot();
    });

    
});