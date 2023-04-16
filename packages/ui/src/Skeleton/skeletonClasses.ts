import type { ClassNameValue } from '@pilot/types';

import type { SkeletonAnimation, SkeletonVariant } from './skeletonTypes';

const animations = {
  pulse: 'animate-skeleton-pulse duration-75',
} satisfies Record<SkeletonAnimation, ClassNameValue>;

const variants = {
  circular: 'rounded-full',
  rectangular: null,
  rounded: 'rounded-md',
  text: 'my-0 scale-y-60 rounded-md before:content-nbsp',
} satisfies Record<SkeletonVariant, ClassNameValue>;

const skeletonClasses = { animations, variants };

export default skeletonClasses;
