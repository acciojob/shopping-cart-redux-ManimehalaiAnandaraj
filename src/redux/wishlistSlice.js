// redux/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: []
  },
  reducers: {
    addToWishlist(state, action) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    toggleWishlist(state, action) {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
