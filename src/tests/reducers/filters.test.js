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

    
});