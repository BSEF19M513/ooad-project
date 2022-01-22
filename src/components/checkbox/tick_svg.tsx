import {SVGProps} from 'react';

export const Tick = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="-2 -4 24 24"
      strokeWidth="1.5"
      stroke="white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};
