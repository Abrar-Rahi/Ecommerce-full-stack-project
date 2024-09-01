import React from 'react';

const StackyCartIcon = ({ width = 24, height = 24, color = '#000' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    <line x1="6" y1="6" x2="23" y2="6"></line>
    <rect x="6" y="4" width="12" height="2" rx="1" ry="1"></rect>
    <rect x="9" y="2" width="6" height="2" rx="1" ry="1"></rect>
  </svg>
);

export default StackyCartIcon;
