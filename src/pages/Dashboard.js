import React from 'react';
import TodosList from '../components/TodosList';
import TodoListFilters from '../components/TodoListFilters';

const DashboardPage = () => (
    <div>
        Todo Dashboard.
        <TodoListFilters />
        <TodosList />
    </div>
);

export default DashboardPage;