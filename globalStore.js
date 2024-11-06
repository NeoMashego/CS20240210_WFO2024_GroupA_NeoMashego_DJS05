//set up
const { createStore } = Redux;

//initialising the state
const init = { count: 0};

//Reducer
function counter( state = init, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

//create store reducer
const store = createStore(counter);

const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }

//dispatch  *add*   *subtract*  *reset*

//subscribe to store
store.subscribe(() => console.log(store.getState()));

//dispatching actions to change the state
// *add*   *subtract*  *reset*
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

//console log   console.log(store.getState);