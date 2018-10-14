import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { editTodo } from '../actions/todos';

const EditTodoPage = (props) => {
    const todo = props.todo;
    console.log(todo);
    return (
        <div>
            <TodoForm 
                todo={todo} 
                onSubmit={(updates) => {
                props.dispatch(editTodo(todo.id, updates));
                props.history.push('/');
            }}/>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    todo: state.todos.find(todo => todo.id == props.match.params.id)
});

export default connect(mapStateToProps)(EditTodoPage);