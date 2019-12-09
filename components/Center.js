import React from 'react'

const Center = ({ children, maxWidth = '70%' }) => (
  <div style={{ maxWidth }}>{children}</div>
);

export default Center;
