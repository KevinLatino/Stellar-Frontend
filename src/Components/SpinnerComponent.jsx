import React from 'react';

const SpinnerComponent = ({ color }) => (
  <div className={`w-6 h-6 border-4 border-t-4 border-t-transparent border-${color} rounded-full animate-spin`}></div>
);

export default SpinnerComponent;
