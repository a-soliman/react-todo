import todosReducer from '../../reducers/todos';
import {todos} from '../fixtures/todos';
import moment from 'moment';

describe('TodosReducer', () => {

    test('Should setup default state', () => {
        const state = todosReducer(undefined, {
            type: '@@INIT'
        });
        expect(state).toEqual([]);
    });

    test('Should createTodo', () => {
        const action = {
            type: 'CREATE_TODO',
            todo: {
                title: 'test todo',
                note: 'test note',
                id: '101',
                createdAt: moment(0).add(100, 'days').valueOf()
            }
        };
        const result = todosReducer(todos, action);
        expect(result).toEqual([ ...todos, action.todo ]);
    });

    test('Should removeTodo', () => {
        const action = {
            type: 'REMOVE_TODO',
            id: '3'
        };
        const result = todosReducer(todos, action);
        expect(result).toHaveLength(2);
    });

    test('Should editTodo', () => {
        const updates = {
            title: 'updated title',
            note: 'updated note',
        };
        const action = {
            type: 'EDIT_TODO',
            id: '1',
            updates
        };
        const result = todosReducer(todos, action);
        expect(result).toEqual([
            {
            ...todos[0],
            ...updates
            },
            todos[1],
            todos[2]
        ]);
    });
});