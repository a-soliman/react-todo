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

    
});