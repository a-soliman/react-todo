import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { TodoListFilters } from '../../components/TodoListFilters';
import { filters, altFilters } from '../fixtures/filters';


describe('TodoListFiltersComponent', () => {
    let setTextFilter, sortByMostRecent, sortByOlder, setStartDateFilter, setEndDeateFilter, wrapper;

    beforeEach(() => {
        setTextFilter = jest.fn();
        sortByMostRecent = jest.fn();
        sortByOlder = jest.fn();
        setStartDateFilter = jest.fn();
        setEndDeateFilter = jest.fn();
        wrapper = shallow(
            <TodoListFilters 
                filters={filters}
                setTextFilter={setTextFilter}
                sortByMostRecent={sortByMostRecent}
                sortByOlder={sortByOlder}
                setStartDateFilter={setStartDateFilter}
                setEndDeateFilter={setEndDeateFilter}
            />
        );
    });

    test('Should render TodoListFiltersComponent correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render TodoListFiltersComponent with alt-filters correctly', () => {
        wrapper.setProps({
            filters: altFilters
        });
        expect(wrapper).toMatchSnapshot();
    });

    
});