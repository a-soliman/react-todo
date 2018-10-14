import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.todo ? this.props.todo.title : '',
            note: this.props.todo ? this.props.todo.note : '',
            error: ''
        };
    }
    

    onTitleChange = (e) => {
        const title  = e.target.value;
        const error = '';
        this.setState(() => ({ title, error }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        let error = ''
        if ( !this.state.title || this.state.title.trim().length < 1 ) {
            error = 'Please provide a title for the Todo.'
            this.setState(() => ({ error }));
        } else {
            error = ''
            this.setState(() => ({ error }));
            this.props.onSubmit({
                title: this.state.title,
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            value={this.state.title} 
                            onChange={this.onTitleChange}
                            type="text" 
                            placeholder="Title" 
                            autoFocus
                        />
                        {
                            this.state.error && 
                            <div className="alert alert-danger">{this.state.error}</div>
                        }
                    </div>
        
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            value={this.state.note} 
                            onChange={this.onNoteChange}
                            placeholder="note">
                        </textarea>
                    </div>
        
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
