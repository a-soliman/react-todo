import React from 'react';

const EditTodoPage = (props) => {
    console.log(props.match.params);
    return (
        <div>
            EditTodoPage => id : {props.match.params.id}
        </div>
    );
}

export default EditTodoPage;