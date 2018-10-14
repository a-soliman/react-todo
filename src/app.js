import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore';
import 'normalize-scss/sass/_normalize.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { createTodo } from './actions/todos';
import { setTextFilter, setStartDateFilter, setEndDeateFilter, sortByMostRecent, sortByOlder } from './actions/filters';
import getVisibleTodos from './selectors/todos';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.filters);
    console.log(visibleTodos);
});

store.dispatch(createTodo({
    title: 'Pay the Rent',
    note: 'Pay the rent on the 5th of the month',
    createdAt: 10
}));
store.dispatch(createTodo({
    title: 'Get the Groceries',
    note: 'Get the groceries by tonight',
    createdAt: 8
}));
store.dispatch(createTodo({
    title: 'Sleep tight',
    note: 'Have a good night sleep',
    createdAt: 12
}));
store.dispatch(sortByMostRecent());



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);


const appContainer = document.querySelector('#app');
ReactDOM.render(jsx, appContainer);