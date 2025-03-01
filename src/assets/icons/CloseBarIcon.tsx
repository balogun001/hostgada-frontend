import React, { memo, SVGProps } from 'react';

function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width="30"
      height="30"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

const CloseBarIcon = memo(Close);
export default CloseBarIcon;
