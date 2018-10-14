import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const TodoListItem = ({ dispatch, id, title, note, createdAt }) => {
    const onRemoveTodo = () => {
        dispatch(removeTodo(id));
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{note}</p>
            <p>{createdAt}</p>
            <button onClick={onRemoveTodo}>remove</button>
        </div>
    )
}; 

export default connect()(TodoListItem);