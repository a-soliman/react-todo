import uuid from 'uuid';

export const createTodo = 
    (
        {
            title = '', 
            note = '', 
            createdAt = 0
        } = {}
    ) => ({
        type: 'CREATE_TODO',
        todo: {
            id: uuid(),
            title,
            note,
            createdAt
        }
    }
);


export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
});


export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});