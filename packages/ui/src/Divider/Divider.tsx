import type { OverridableComponent } from '@pilot/types/react';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import * as classes from './dividerClasses';
import type { DividerTypeMap } from './dividerTypes';

const Divider: OverridableComponent<DividerTypeMap> = forwardRef(
  (props, ref) => {
    const {
      className,
      component: Component = 'hr',
      flexItem,
      orientation = 'horizontal',
      ...other
    } = props;

    return (
      <Component
        ref={ref}
        className={twJoin(
          classes.orientations[
            orientation === 'vertical' && flexItem
              ? 'vertical-flexItem'
              : orientation
          ],
          className,
        )}
        {...other}
      />
    );
  },
);

export default Divider;
