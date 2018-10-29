import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, setStartDateFilter, setEndDeateFilter, sortByMostRecent, sortByOlder} from '../actions/filters';

export class TodoListFilters extends React.Component {

    state = {
        calenderFocused: null
    }

    onTextFilterChange = (e) => {
        const filterText = e.target.value.trim().toLowerCase();
        this.props.setTextFilter(filterText);
    };

    onSortFilterChange = (e) => {
        const sortBy = e.target.value;
        if ( sortBy === 'mostRecent') {
            this.props.sortByMostRecent();
        }
        else {
            this.props.sortByOlder();
        }
        
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateFilter(startDate);
        this.props.setEndDeateFilter(endDate);
    }

    onFocusChange = (calenderFocused => this.setState({ calenderFocused }))

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
                    focusedInput={this.state.calenderFocused}
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

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByMostRecent: () => dispatch(sortByMostRecent()),
    sortByOlder: () => dispatch(sortByOlder()),
    setStartDateFilter: (startDate) => dispatch(setStartDateFilter(startDate)),
    setEndDeateFilter: (endDate) => dispatch(setEndDeateFilter(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilters);