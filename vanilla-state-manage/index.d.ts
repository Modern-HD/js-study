declare namespace VanillaStateManager {

    export interface Action {
        type: string;
    }

    export interface Store<T extends Object, K extends Action> {
        getState: () => T;
        dispatch: (action: K) => void;
    }

    export type Reducer<T extends Object, K extends Action> = (state: T, action: K) => T;
    export type CreateStore<T extends Object, K extends Action> = (initialState: T, reducer: Reducer<T, K>, subscribe?: (state: T, action: K) => void) => Store<T, K>;
    export type StoreGenerator<T extends Object, K extends Action> = (initialState: T, reducer: Reducer<T, K>, subscribe?: (state: T, action: K) => void) => Generator<T, void, K>;
}