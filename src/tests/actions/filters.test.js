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

    test('Should set startDate filter', () => {
        const startDate = '111';
        const action = setStartDateFilter(startDate);
        expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate
        });
    });

    test('Should set endDate filter', () => {
        const endDate = '555';
        const action = setEndDeateFilter(endDate);
        expect(action).toEqual({
            type: 'SET_END_DATE',
            endDate
        });
    });

    test('Should sort by most_recent', () => {
        const action = sortByMostRecent();
        expect(action).toEqual({
            type: 'SORT_BY_MOST_RECENT'
        });
    });

    test('Should sort by older', () => {
        const action = sortByOlder();
        expect(action).toEqual({
            type: 'SORT_BY_OLDER'
        });
    });
});