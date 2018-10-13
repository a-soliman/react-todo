import { createStore } from 'redux';


// Actions
const incrementCount = (incrementBy =1) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = (decrementBy = 1 ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = (setTo) => ({
    type: 'SET',
    setTo
});

const resetCount = () => ({
    type: 'RESET'
});

// REDUCER
const countReducer = (state = {count: 0}, action) => {
    switch( action.type ) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return { count: state.count + incrementBy }
        
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy }
        
        case 'SET': 
            return  { count: action.setTo}
        
        case 'RESET':
            return { count: 0 }

        default:
            return state;
    }
    
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());
store.dispatch(incrementCount(3));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount(7));


