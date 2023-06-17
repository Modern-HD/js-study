import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})

export const { increment } = countSlice.actions;
export default countSlice.reducer;