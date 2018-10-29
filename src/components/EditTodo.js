import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { editTodo, removeTodo } from '../actions/todos';

export class EditTodoPage extends React.Component {

    onRemoveTodo = () => {
        this.props.removeTodo(this.props.todo.id);
        this.props.history.push('/');
    };

    onSubmit = (updates) => {
        this.props.editTodo(this.props.todo.id, updates);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <TodoForm 
                    todo={this.props.todo} 
                    onSubmit={this.onSubmit}
                />
    
                <button onClick={this.onRemoveTodo}>remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    todo: state.todos.find(todo => todo.id == props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editTodo: (id, updates) => dispatch(editTodo(id, updates)),
    removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);