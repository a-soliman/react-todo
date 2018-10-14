import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';


const TodoListItem = ({ id, title, note, createdAt }) => {
    
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{note}</p>
            <p>{moment(createdAt).format("MMM DD, YYYY")}</p>
        </div>
    )
}; 

export default connect()(TodoListItem);