const gerVisibleTodos = (todos, { text, startDate, endDate }) => {
    return todos.filter( todo => {
        const textMatch = todo.title.toLowerCase().includes(text.toLowerCase()) || todo.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    });
};

export default gerVisibleTodos;