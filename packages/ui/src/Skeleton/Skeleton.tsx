import type { OverridableComponent } from '@pilot/types';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import * as classes from './skeletonClasses';
import type { SkeletonTypeMap } from './skeletonTypes';

const Skeleton: OverridableComponent<SkeletonTypeMap> = forwardRef(
  (props, ref) => {
    const {
      animation = 'pulse',
      className,
      component: Component = 'span',
      height,
      style,
      variant = 'text',
      width,
      ...other
    } = props;

    return (
      <Component
        ref={ref}
        className={twJoin(
          'block bg-black/10 child:invisible',
          animation && classes.animations[animation],
          classes.variants[variant],
          className
        )}
        style={{ height, width, ...style }}
        {...other}
      />
    );
  }
);

export default Skeleton;
