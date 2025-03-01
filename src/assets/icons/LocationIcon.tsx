import React, { memo, SVGProps } from 'react';

function Location(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.5" width="20" height="20" rx="10" fill="#E8E8E8" />
      <path
        d="M8.29004 9.66658C8.29004 9.21292 8.47025 8.77784 8.79104 8.45706C9.11183 8.13627 9.54691 7.95605 10.0006 7.95605C10.4542 7.95605 10.8893 8.13627 11.2101 8.45706C11.5309 8.77784 11.7111 9.21292 11.7111 9.66658C11.7111 10.1202 11.5309 10.5553 11.2101 10.8761C10.8893 11.1969 10.4542 11.3771 10.0006 11.3771C9.54691 11.3771 9.11183 11.1969 8.79104 10.8761C8.47025 10.5553 8.29004 10.1202 8.29004 9.66658Z"
        fill="#FE791B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.67064 9.07599C5.75819 8.01797 6.24023 7.0315 7.02115 6.3123C7.80207 5.5931 8.82479 5.1937 9.88643 5.19336H10.1138C11.1754 5.1937 12.1982 5.5931 12.9791 6.3123C13.76 7.0315 14.242 8.01797 14.3296 9.07599C14.4267 10.2573 14.0621 11.4302 13.3122 12.3481L10.7896 15.4334C10.694 15.5504 10.5735 15.6447 10.437 15.7095C10.3005 15.7742 10.1512 15.8078 10.0001 15.8078C9.849 15.8078 9.69977 15.7742 9.56323 15.7095C9.42669 15.6447 9.30626 15.5504 9.21064 15.4334L6.68854 12.3481C5.93852 11.4303 5.57364 10.2573 5.67064 9.07599ZM10.0001 7.16704C9.33707 7.16704 8.70119 7.43044 8.23235 7.89928C7.76351 8.36812 7.50012 9.004 7.50012 9.66704C7.50012 10.3301 7.76351 10.966 8.23235 11.4348C8.70119 11.9037 9.33707 12.167 10.0001 12.167C10.6632 12.167 11.299 11.9037 11.7679 11.4348C12.2367 10.966 12.5001 10.3301 12.5001 9.66704C12.5001 9.004 12.2367 8.36812 11.7679 7.89928C11.299 7.43044 10.6632 7.16704 10.0001 7.16704Z"
        fill="#FE791B"
      />
    </svg>
  );
}

const LocationIcon = memo(Location);
export default LocationIcon;
