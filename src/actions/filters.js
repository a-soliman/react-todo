export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});


export const setStartDateFilter = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});


export const setEndDeateFilter = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

export const sortByMostRecent = () => ({
    type: 'SORT_BY_MOST_RECENT'
});

export const sortByOlder = () => ({
    type: 'SORT_BY_OLDER'
});