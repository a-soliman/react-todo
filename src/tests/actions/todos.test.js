import { createTodo, editTodo, removeTodo } from '../../actions/todos';

describe('Todos Actions Generators', () => {
    const todo = {
        title: 'Test Title',
        note: 'Test Note!'
    };

    test('Should create todo with the passed params', () => {
        const action = createTodo(todo);
        expect(action.type).toBe('CREATE_TODO');
        expect(action.todo.title).toBe(todo.title);
        expect(action.todo.note).toBe(todo.note);
        expect(action.todo.id).toBeDefined();
    });

    test('Should remove todo', () => {
        const id = 'abc123';
        const action = removeTodo(id);
        expect(action).toEqual({
            type: 'REMOVE_TODO',
            id
        });
    });

    test('Should editTodo', () => {
        const updates = {
            title: 'updated title',
            note: 'updated note'
        };
        const id = 'abc123'
        const action = editTodo(id, updates);
        expect(action).toEqual({
            type: 'EDIT_TODO',
            id,
            updates
        });
    });
});