import { memo, SVGProps } from 'react';

const GradIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 387 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15.5C0 6.93959 6.93959 0 15.5 0H371.5C380.06 0 387 6.93959 387 15.5V15.5C387 24.0604 380.06 31 371.5 31H15.5C6.93959 31 0 24.0604 0 15.5V15.5Z'
      fill='#7B6369'
      stroke='black'
    />
  </svg>
);

const Memo = memo(GradIcon);
export { Memo as GradIcon };
