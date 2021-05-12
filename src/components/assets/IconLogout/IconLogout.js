import React from 'react';
import { connect } from 'react-redux';

import s from './IconLogout.module.scss';

const IconClose = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-3.984h2.016v3.984h13.969v-13.969h-13.969v3.984h-2.016v-3.984q0-0.844 0.586-1.43t1.43-0.586h13.969zM10.078 15.609l2.578-2.625h-9.656v-1.969h9.656l-2.578-2.625 1.406-1.406 5.016 5.016-5.016 5.016z"></path>
    </svg>
  );
};

export default IconClose;