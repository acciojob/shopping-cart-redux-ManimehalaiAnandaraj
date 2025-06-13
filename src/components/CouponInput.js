import React, { useState } from 'react';
import {useDispatch}  from 'react-redux'
import { applyCoupon } from './actions';

const CouponInput = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyCoupon(code));
    setCode('');
  };

  return (
    <div>
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter coupon code" />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default CouponInput;
