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

    
});