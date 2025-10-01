import { createSlice } from '@reduxjs/toolkit';

const initialState = { selected: 'Semua' };

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
