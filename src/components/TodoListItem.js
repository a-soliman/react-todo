import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const TodoListItem = ({ id, title, note, createdAt }) => {
    
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{note}</p>
            <p>{createdAt}</p>
        </div>
    )
}; 

export default connect()(TodoListItem);