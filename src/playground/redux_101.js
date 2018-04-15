import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: "DECREMENT",
        decrementBy
    }
}

const resetCount = () => {
    return {
        type: "RESET"
    }
}

const setCount = ({ count = 1 } = {}) => {
    return {
        type: "SET",
        count
    }
}

const store = createStore((state = { count:0 }, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));

store.dispatch(setCount());
