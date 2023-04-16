import type { OverridableComponent } from '@pilot/types';
import { Children, forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import stackClasses from './stackClasses';
import type { StackTypeMap } from './stackTypes';

const Stack: OverridableComponent<StackTypeMap> = forwardRef((props, ref) => {
  const {
    children,
    className,
    component: Component = 'div',
    direction = 'column',
    divider,
    ...other
  } = props;

  return (
    <Component
      ref={ref}
      className={twJoin('flex', stackClasses.directions[direction], className)}
      {...other}
    >
      {divider
        ? Children.map(children, (child, index) =>
            index === 0 ? child : [divider, child]
          )
        : children}
    </Component>
  );
});

export default Stack;
