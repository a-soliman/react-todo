import { setTextFilter, setStartDateFilter, setEndDeateFilter, sortByMostRecent, sortByOlder } from '../../actions/filters';

describe('Filters Actions Generators', () => {
    test('Should set text filter', () => {
        const text = 'test filter';
        const action = setTextFilter(text);
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text
        });
    });
    
});