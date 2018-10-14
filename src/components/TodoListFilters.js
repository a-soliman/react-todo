import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';

const TodoListFilters = (props) => {
    const onChange = (e) => {
        props.dispatch(setTextFilter(e.target.value.trim()));
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Todos" 
                value={props.filters.text} 
                onChange={onChange}    
            />
        </div>
    );
};

const mapStateToProps = (state) => (
    { filters: state.filters }
);
export default connect(mapStateToProps)(TodoListFilters);