import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { editTodo, removeTodo } from '../actions/todos';

const EditTodoPage = (props) => {
    const todo = props.todo;
    
    const onRemoveTodo = () => {
        props.dispatch(removeTodo(todo.id));
        props.history.push('/');
    }

    return (
        <div>
            <TodoForm 
                todo={todo} 
                onSubmit={(updates) => {
                props.dispatch(editTodo(todo.id, updates));
                props.history.push('/');
            }}/>

            <button onClick={onRemoveTodo}>remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    todo: state.todos.find(todo => todo.id == props.match.params.id)
});

export default connect(mapStateToProps)(EditTodoPage);