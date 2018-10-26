import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, setStartDateFilter, setEndDeateFilter, sortByMostRecent, sortByOlder} from '../actions/filters';

class TodoListFilters extends React.Component {

    state = {
        calendarFocus: null
    }

    onTextFilterChange = (e) => {
        const filterText = e.target.value.trim().toLowerCase();
        this.props.dispatch(setTextFilter(filterText));
    };

    onSortFilterChange = (e) => {
        const sortBy = e.target.value;
        if ( sortBy === 'mostRecent') {
            this.props.dispatch(sortByMostRecent());
        }
        else {
            this.props.dispatch(sortByOlder());
        }
        
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDateFilter(startDate));
        this.props.dispatch(setEndDeateFilter(endDate));
    }

    onFocusChange = (calendarFocus => this.setState({ calendarFocus }))

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search Todos" 
                    value={this.props.filters.text} 
                    onChange={this.onTextFilterChange}    
                />
    
                <select 
                    value={this.props.filters.sort}
                    onChange={this.onSortFilterChange}>
                    <option value="mostRecent">most recent</option>
                    <option value="older">older first</option>
                </select>
    
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => (
    { filters: state.filters }
);
export default connect(mapStateToProps)(TodoListFilters);