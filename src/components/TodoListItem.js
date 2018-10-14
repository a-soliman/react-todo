import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const TodoListItem = ({ dispatch, id, title, note, createdAt }) => {
    const onRemoveTodo = () => {
        dispatch(removeTodo(id));
    }
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{note}</p>
            <p>{createdAt}</p>
            <button onClick={onRemoveTodo}>remove</button>
        </div>
    )
}; 

export default connect()(TodoListItem);