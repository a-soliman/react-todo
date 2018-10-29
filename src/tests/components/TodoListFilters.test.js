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

    test('Should handle text change', () => {
        const text = 'test';
        const e = {
            target: {
                value: text
            }
        };
        wrapper.find('input').at(0).simulate('change', e);
        expect(setTextFilter).toHaveBeenLastCalledWith(text);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should sortBy older', () => {
        const sortBy = 'older';
        const e = {
            target: {
                value: sortBy
            }
        };
        wrapper.find('select').simulate('change', e);
        expect(sortByOlder).toHaveBeenCalled();
    });

    test('Should sortBy mostRecent', () => {
        const sortBy = 'mostRecent';
        const e = {
            target: {
                value: sortBy
            }
        };
        wrapper.find('select').simulate('change', e);
        expect(sortByMostRecent).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    
});