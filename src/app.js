import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore';
import 'normalize-scss/sass/_normalize.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { createTodo } from './actions/todos';
import { setTextFilter, setStartDateFilter, setEndDeateFilter } from './actions/filters';
import getVisibleTodos from './selectors/todos';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.filters);
    console.log(visibleTodos);
});

store.dispatch(createTodo({
    title: 'test todo',
    note: 'This is a test todo',
    createdAt: 10
}));
store.dispatch(createTodo({
    title: 'test todo',
    note: 'This is a test todo',
    createdAt: 8
}));
store.dispatch(createTodo({
    title: 'test todo',
    note: 'This is a test todo',
    createdAt: 12
}));





const appContainer = document.querySelector('#app');
ReactDOM.render(<AppRouter />, appContainer);