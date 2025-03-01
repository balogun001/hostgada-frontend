import React, { memo, SVGProps } from 'react';

function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.10531 11.1282L4.05073 7.22142L0.907227 4.59481L5.04799 4.24921L6.66968 0.564453L8.29137 4.24847L12.4314 4.59408L9.28786 7.22069L10.234 11.1275L6.66968 9.05387L3.10531 11.1282Z"
        fill="#FE974D"
      />
    </svg>
  );
}

const StarIcon = memo(Star);
export default StarIcon;
