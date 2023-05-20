/**
 * @typedef {import('./index')} VanillaStateManager
 */

/** @type {VanillaStateManager.StoreGenerator<T, K>} */
function* storeGenerator(initialState, reducer, subscribe) {
    const state = initialState;
    while (true) {
        const action = yield;
        const newState = reducer(state, action);
        subscribe && subscribe(newState, {...action});
    }
}

/** @type {VanillaStateManager.CreateStore<T, K>} */
function createStore(initialState, reducer, subscribe) {
    const store = storeGenerator(initialState, reducer, subscribe);
    store.next();
    return {
        getState: () => {
            return {...initialState};
        },
        dispatch: (action) => {
            store.next(action);
        }
    };
}

/** @type {VanillaStateManager.Reducer<{ value: number }, { type: "INCREASE" | "DECREASE" }>} */
function countReducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            state.value++;
        return {...state};
        case "DECREASE":
            state.value--;
        return {...state};
    }
}

/** @type {VanillaStateManager.Store<{ value: number }, { type: "INCREASE" | "DECREASE" }>} */
const countStore = createStore({value: 0}, countReducer, (state, action) => {
    const valueZone = document.getElementById('counter-value');
    if (action.type === "INCREASE" || action.type === "DECREASE") {
        valueZone.innerText = state.value;
    }
})

document.getElementById('increase').addEventListener('click', () => {
    countStore.dispatch({ type: "INCREASE" });
})
document.getElementById('decrease').addEventListener('click', () => {
    countStore.dispatch({ type: "DECREASE" });
})
document.getElementById('lookup-count-state').addEventListener('click', () => {
    console.log(countStore.getState());
})