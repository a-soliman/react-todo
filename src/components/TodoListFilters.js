import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByMostRecent, sortByOlder} from '../actions/filters';

const TodoListFilters = (props) => {

    const onTextFilterChange = (e) => {
        const filterText = e.target.value.trim().toLowerCase();
        props.dispatch(setTextFilter(filterText));
    };

    const onSortFilterChange = (e) => {
        const sortBy = e.target.value;
        if ( sortBy === 'mostRecent') {
            props.dispatch(sortByMostRecent());
        }
        else {
            props.dispatch(sortByOlder());
        }
        
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Todos" 
                value={props.filters.text} 
                onChange={onTextFilterChange}    
            />

            <select 
                value={props.filters.sort}
                onChange={onSortFilterChange}>
                <option value="mostRecent">most recent</option>
                <option value="older">older first</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => (
    { filters: state.filters }
);
export default connect(mapStateToProps)(TodoListFilters);