const todosReducerDefaultState = [];

const todosReducer =( state = todosReducerDefaultState, action ) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [...state, action.todo]
        
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)

        case 'EDIT_TODO':
            return state.map(todo => {
                if ( todo.id === action.id ) {
                    return {
                        ...todo,
                        ...action.updates
                    }
                } else {
                    return todo;
                }
            })

        default:
            return state;
    }
};

export default todosReducer;