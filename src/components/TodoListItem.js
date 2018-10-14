import React from 'react';

const TodoListItem = ({ title, note, createdAt }) => (
    <div>
        <h2>{title}</h2>
        <p>{note}</p>
        <p>{createdAt}</p>
    </div>
); 

export default TodoListItem;