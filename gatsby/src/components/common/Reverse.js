import React from 'react';
import ReverseString from '../../utils/reverseString';

const Reverse = ({ children }) => (
  <span
    className="mark"
    onFocus={ReverseString}
    onBlur={ReverseString}
    onMouseEnter={ReverseString}
    onMouseLeave={ReverseString}
  >
    {children}
  </span>
);

export default Reverse;
