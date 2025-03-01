import React, { memo, SVGProps } from 'react';

function ImageUpload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="47"
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.375 27.417V9.79199H41.625V37.2087H6.375V27.417Z"
        stroke="#FE791B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.375 31.334L14.2083 25.459L20.0833 29.3757L31.8333 19.584L41.625 27.4173"
        stroke="#FE791B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1875 21.542C16.8098 21.542 18.125 20.2268 18.125 18.6045C18.125 16.9822 16.8098 15.667 15.1875 15.667C13.5652 15.667 12.25 16.9822 12.25 18.6045C12.25 20.2268 13.5652 21.542 15.1875 21.542Z"
        fill="#FE791B"
      />
      <path
        d="M6.375 31.334L14.2083 25.459L20.0833 29.3757L31.8333 19.584L41.625 27.4173V37.209H6.375V31.334Z"
        fill="#FE791B"
      />
    </svg>
  );
}

const ImageUploadIcon = memo(ImageUpload);
export default ImageUploadIcon;
