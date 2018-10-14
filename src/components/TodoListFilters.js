import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';

const TodoListFilters = (props) => {
    const onChange = (e) => {
        const filterText = e.target.value.trim().toLowerCase();
        props.dispatch(setTextFilter(filterText));
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Todos" 
                value={props.filters.text} 
                onChange={onChange}    
            />

            <select>
                <option>most recent</option>
                <option>older first</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => (
    { filters: state.filters }
);
export default connect(mapStateToProps)(TodoListFilters);