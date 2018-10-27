import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import getVisibleTodos from '../selectors/todos';

export const TodosList = ( props ) => {
    return (
        <div>
            {
                props.todos.length == 0 ? (
                    <p>No Todos..</p>
                )
                : (
                    props.todos.map(todo => <TodoListItem key={todo.id} {...todo} />)
                ) 
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