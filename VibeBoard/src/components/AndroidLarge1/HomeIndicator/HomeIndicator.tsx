import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIndicator.module.css';
import { RectangleIcon } from './RectangleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 6:2 */
export const HomeIndicator: FC<Props> = memo(function HomeIndicator(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon} />
      </div>
    </div>
  );
});
