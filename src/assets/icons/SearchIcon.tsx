import React, { memo, SVGProps } from 'react';

function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 17.5L13.6396 13.6396M13.6396 13.6396C14.2999 12.9793 14.8237 12.1953 15.1811 11.3326C15.5385 10.4698 15.7224 9.54507 15.7224 8.61121C15.7224 7.67735 15.5385 6.75264 15.1811 5.88987C14.8237 5.0271 14.2999 4.24316 13.6396 3.58283C12.9793 2.92249 12.1953 2.39868 11.3326 2.04131C10.4698 1.68394 9.54507 1.5 8.61121 1.5C7.67735 1.5 6.75264 1.68394 5.88987 2.04131C5.0271 2.39868 4.24316 2.92249 3.58283 3.58283C2.24921 4.91644 1.5 6.7252 1.5 8.61121C1.5 10.4972 2.24921 12.306 3.58283 13.6396C4.91644 14.9732 6.7252 15.7224 8.61121 15.7224C10.4972 15.7224 12.306 14.9732 13.6396 13.6396Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SearchIcon = memo(Search);
export default SearchIcon;
