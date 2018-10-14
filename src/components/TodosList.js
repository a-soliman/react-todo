import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import getVisibleTodos from '../selectors/todos';

const TodosList = ( props ) => {
    console.log(props.todos)
    return (
        <div>
            <h1>Todos list</h1> 
            {
                props.todos.map(todo => <TodoListItem key={todo.id} {...todo} />)
            }
        </div>
        
    )
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filters)
    }
};

export default connect(mapStateToProps)(TodosList);