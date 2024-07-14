import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge1.module.css';
import { DownNavIcon } from './DownNavIcon.js';
import { GradIcon } from './GradIcon.js';
import { HomeIndicator } from './HomeIndicator/HomeIndicator.js';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const AndroidLarge1: FC<Props> = memo(function AndroidLarge1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.grad}>
        <GradIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.downNav}>
        <DownNavIcon className={classes.icon2} />
      </div>
      <HomeIndicator className={classes.homeIndicator} />
      <div className={classes.pinkLine}></div>
      <div className={classes.line1}></div>
      <div className={classes.plus1}></div>
      <div className={classes.topNav}></div>
      <div className={classes.magnifyingGlass1}></div>
      <div className={classes.curateYourFitsAndWinDiscounts}>curate your fits and win discounts ;)</div>
      <div className={classes.vibeBoard}>VibeBoard</div>
      <div className={classes.boxAboveNav}></div>
      <div className={classes.streetwear}>Streetwear</div>
      <div className={classes._8Products}>8 Products</div>
      <div className={classes.share3}></div>
      <div className={classes.street2}></div>
      <div className={classes.street4}></div>
      <div className={classes.street1}></div>
      <div className={classes._6Products}>6 Products</div>
      <div className={classes.summerChic}>Summer Chic</div>
      <div className={classes.summer3}></div>
      <div className={classes.summer2}></div>
      <div className={classes.summer1}></div>
      <div className={classes.share2}></div>
      <div className={classes.corporateSleek}>Corporate Sleek</div>
      <div className={classes.corpRec}></div>
      <div className={classes._19Products}>19 Products</div>
      <div className={classes.corp4}></div>
      <div className={classes.corporate21}></div>
      <div className={classes.corporate11}></div>
      <div className={classes.share1}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.sUBMIT}>SUBMIT</div>
    </div>
  );
});
