import moment from 'moment';

const filtersDefaultState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sort: 'mostRecent'
}

const filtersReducer = ( state = filtersDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        case 'SORT_BY_MOST_RECENT':
            return {
                ...state,
                sort: 'mostRecent'
            }
        
        case 'SORT_BY_OLDER':
            return {
                ...state,
                sort: 'older'
            }

        default:
            return state;
    }
};

export default filtersReducer;