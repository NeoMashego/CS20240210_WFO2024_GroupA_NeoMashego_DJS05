/**
 * Area for functions to be held in state
 */

class Storage {
    constructor(reduce){
        this.reduce = reduce;
        this.state = reduce(undefined, {});  //initialize state
        this.listen = [];
    }
    //getState
    getState(){
        return this.state;
    }
    //dispatch
    dispatch(action){
        this.state = this.reduce(this.state, action);
        this.listen.forEach(listen => listen())
    }
    //subscribe
    subscribe(listen){
        this.listen.push(listen);
        return () => {
            this.listen = this.listen.filter(l => l !== listen);
        };
    }
};

//store instance
const store = new Storage(reduce);
const INCREMENT = { type: 'INCREMENT'};
const DECREMENT = { type: 'DECREMENT'};
const RESET = { type: 'RESET'};

function reduce(state = { count: 0}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'RESET':
            return { count: 0 };
      default:
        return state;
    }
  }

// Function to log the current state whenever it changes
function render() {
    const count = store.getState().count;
    console.log('Count:', count); // Log current count state
  }

  
// Subscribe to state updates
store.subscribe(render);
  
// Initial render
render();

store.getState();
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
//store.dispatch(DECREMENT);
store.dispatch(DECREMENT);
if (store.getState().count === 1) {
    store.dispatch(RESET);  // Dispatch RESET action
}