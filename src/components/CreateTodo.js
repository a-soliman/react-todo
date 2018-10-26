import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { createTodo } from '../actions/todos';

const CreateTodoPage = (props) => (
    <div>
        CreateTodoPage
        <TodoForm  onSubmit={(todo) => {
            props.dispatch((createTodo(todo)));
            props.history.push('/');
        }}/>
    </div>
);
 
export default connect()(CreateTodoPage);