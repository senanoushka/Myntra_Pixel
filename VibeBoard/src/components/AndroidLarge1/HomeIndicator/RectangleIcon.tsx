import { memo, SVGProps } from 'react';

const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 141 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.839996 2.5C0.839996 1.11929 1.95928 0 3.34 0H137.7C139.081 0 140.2 1.11929 140.2 2.5V2.5C140.2 3.88071 139.081 5 137.7 5H3.34C1.95928 5 0.839996 3.88071 0.839996 2.5V2.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(RectangleIcon);
export { Memo as RectangleIcon };
