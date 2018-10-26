import React from 'react';
import TodosList from './TodosList';
import TodoListFilters from './TodoListFilters';

const DashboardPage = () => (
    <div>
        Todo Dashboard.
        <TodoListFilters />
        <TodosList />
    </div>
);

export default DashboardPage;