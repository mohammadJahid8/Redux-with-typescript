import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  count: 0;
}
const initialState: IInitialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
