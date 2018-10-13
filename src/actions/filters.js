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