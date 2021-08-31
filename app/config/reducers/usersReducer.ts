import { createReducer } from "@reduxjs/toolkit";

const usersReducer = createReducer(0, (builder) => {
  builder
    .addCase('INCREMENT', (state, action) => {
      return state = state + 1;
    })
    .addCase('DECREMENT', (state, action) => {
      return state = state -1;
    });
});

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('INCREMENT', (state, action) => {
      state.value++
    })
    .addCase('DECREMENT', (state, action) => {
      state.value--
    });
});

// export default usersReducer;
export default counterReducer;