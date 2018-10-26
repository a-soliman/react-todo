import getVisibleTodos from '../../selectors/todos';
import todo, { todos } from '../fixtures/todos';
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

    
});