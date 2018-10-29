import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'mostRecent',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'Rent',
    sortBy: 'older',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };