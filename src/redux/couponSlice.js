// redux/couponSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: '',
  discount: 0,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    applyCoupon(state, action) {
      const validCoupons = { SAVE10: 10, SAVE20: 20 };
      const discount = validCoupons[action.payload] || 0;
      state.code = action.payload;
      state.discount = discount;
    },
  },
});

export const { applyCoupon } = couponSlice.actions;
export default couponSlice.reducer;
