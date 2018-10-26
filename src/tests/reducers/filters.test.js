import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { stat } from 'fs';

describe('FiltersReducer', () => {
    const state = {
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sort: 'mostRecent'
    };

    test('Should setup default filter values', () => {
        const state = filtersReducer(undefined, {
            type: '@@INIT'
        });
        expect(state).toEqual({
            text: '',
            sort: 'mostRecent',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('Should set text filter', () => {
        const text = 'test';
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            text
        });
    });

    test('Should sort by older', () => {
        const sort = 'older';
        const action = {
            type: 'SORT_BY_OLDER'
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            sort
        });
    });

    test('Should sort by mostRecent', () => {
        const state = {
            text: '',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month'),
            sort: 'older'
        };
        const sort = 'mostRecent';
        const action = {
            type: 'SORT_BY_MOST_RECENT'
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            sort
        });
    });

    
});