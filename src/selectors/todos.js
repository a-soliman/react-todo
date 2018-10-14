const gerVisibleTodos = (todos, { text, startDate, endDate, sort }) => {
    return todos.filter( todo => {
        const textMatch = todo.title.toLowerCase().includes(text.toLowerCase()) || todo.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    })
    .sort( (a, b) => {
        return sort === 'older' ? b.createdAt < a.createdAt : a.createdAt < b.createdAt;
    });

};

export default gerVisibleTodos;