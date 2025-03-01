import React, { memo, SVGProps } from 'react';

function Hamburger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M20 7L4 7"
          stroke="#284CD7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />{' '}
        <path
          d="M20 12L4 12"
          stroke="#284CD7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />{' '}
        <path
          d="M20 17L4 17"
          stroke="#284CD7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />{' '}
      </g>
    </svg>
  );
}

const HamburgerIcon = memo(Hamburger);
export default HamburgerIcon;
