import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todos';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers(
            { 
                todos: todosReducer, 
                filters: filtersReducer 
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};



