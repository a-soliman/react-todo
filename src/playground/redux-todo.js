import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/* TODO - ACTIONS */
// CREATE_TODO
const createTodo = (
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
});
// EDIT_TODO
const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
});

// REMOVE_TODO
const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});

/* FILTERS - ACTIONS */
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SET_STARTDATE_FILTER
const setStartDateFilter = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_ENDDATE_FILTER
const setEndDeateFilter = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});


// TODOs REDUCER
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

const filtersDefaultState = {
    text: '',
    startDate: undefined,
    endDate: undefined
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

        default:
            return state;
    }
};

// Get visible todos
const gerVisibleTodos = (todos, { text, startDate, endDate }) => {
    return todos.filter( todo => {
        const textMatch = todo.title.toLowerCase().includes(text.toLowerCase()) || todo.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    });
};

const store = createStore(
    combineReducers({ todos: todosReducer, filters: filtersReducer })
);

store.subscribe(() => {
    const state = store.getState();
    const visibileTodos = gerVisibleTodos(state.todos, state.filters);
    console.log(visibileTodos);
})

const todo_one = store.dispatch(createTodo());
const todo_two = store.dispatch(createTodo());


for ( let i = 0; i < 30; i+=5 ) {
    const todoToAdd = store.dispatch(createTodo(
        {
            title : `todo  ${i}`,
            note: `This is todo ${i}`,
            createdAt : i
        }
    ));
}
store.dispatch(editTodo(todo_two.todo.id, {note: 'This is an updated todo'}))


store.dispatch(setTextFilter('2'));
store.dispatch(setStartDateFilter(15));
store.dispatch(setEndDeateFilter(25));


const demoState = {
    todos: [
        {
            id: 'dsfsdfs',
            title: 'this is a title',
            note: 'this is an optional note about this todo',
            createdAt: 0
        }
    ],

    filters: {
        text: 'title',
        startDate: undefined,
        endDate: undefined
    }
}