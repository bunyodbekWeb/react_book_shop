import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const bookSlice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const obj = action.payload;
      console.log(action.payload);
      const newBook ={
          id: id++,
          avtor: obj.avtor,
          kitob: obj.kitob
      }
      state.push(newBook)
    },
  },
});

export const { add } = bookSlice.actions;
export default bookSlice.reducer;
