import getVisibleTodos from '../../selectors/todos';
import { todos } from '../fixtures/todos';
import moment from 'moment';

describe('GetVisibleTodos Selector', () => {
    test('Should filter by text values', () => {
        const filters = {
            text: 'one',
            startDate: undefined,
            endDate: undefined,
            sort: 'mostRecent'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[0] ]);
    });

    test('Should clear text filter if no parmas passed', () => {
        const filters = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sort: 'mostRecent'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[2], todos[1], todos[0] ]);
    });

    test('Should filter by startDate', () => {
        const filters = {
            text: '',
            startDate: moment(0).add(3, 'days') ,
            endDate: undefined,
            sort: 'mostRecent'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[2], todos[1] ]);
    });

    test('Should filter by endDate', () => {
        const filters = {
            text: '',
            startDate: undefined,
            endDate: moment(0).add(4, 'days'),
            sort: 'mostRecent'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[1], todos[0] ]);
    });

    test('Should sort by mostRecent', () => {
        const filters = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sort: 'mostRecent'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[2], todos[1], todos[0] ]);
    });

    test('Should sort by older', () => {
        const filters = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sort: 'older'
        };
        const result = getVisibleTodos(todos, filters);
        expect(result).toEqual([ todos[0], todos[1], todos[2] ]);
    });
});