import moment from 'moment';

const gerVisibleTodos = (todos, { text, startDate, endDate, sort }) => {
    return todos.filter( todo => {
        const createdAtMoment = todo.createdAt;
        const textMatch = todo.title.toLowerCase().includes(text.toLowerCase()) || todo.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        return textMatch && startDateMatch && endDateMatch;
    })
    .sort( (a, b) => {
        return sort === 'older' ? b.createdAt < a.createdAt : a.createdAt < b.createdAt;
    });

};

export default gerVisibleTodos;