import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { createTodo } from '../actions/todos';

export class CreateTodoPage extends React.Component {
    onSubmit = (todo) => {
        this.props.onSubmit(todo);
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                CreateTodoPage
                <TodoForm  onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
        onSubmit: (todo) => dispatch(createTodo(todo))
});

export default connect(undefined, mapDispatchToProps)(CreateTodoPage);