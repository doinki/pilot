import type { OverridableComponent } from '@pilot/types/react';
import { Children, cloneElement, forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import * as classes from './stackClasses';
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
      className={twJoin('flex', classes.directions[direction], className)}
      {...other}
    >
      {divider
        ? Children.toArray(children)
            .filter(Boolean)
            .map((child, index) =>
              index === 0
                ? child
                : // eslint-disable-next-line react/no-array-index-key
                  [cloneElement(divider, { key: `separator-${index}` }), child],
            )
        : children}
    </Component>
  );
});

export default Stack;
