import React from 'react';

const SpinnerComponent = ({color}) => (
  <div className={`w-5 h-5 border-4 border-t-4 border-t-transparent border-${color} rounded-full animate-spin`}></div>
);

export default SpinnerComponent;
