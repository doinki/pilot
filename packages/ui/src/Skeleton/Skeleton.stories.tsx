import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ['autodocs'],
  title: 'ui/Skeleton',
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const VariantCircular: Story = {
  args: { height: 64, variant: 'circular', width: 64 },
};
export const VariantRectangular: Story = {
  args: { height: 64, variant: 'rectangular', width: 160 },
};
export const VariantRounded: Story = {
  args: { height: 64, variant: 'rounded', width: 320 },
};
export const VariantText: Story = { args: { variant: 'text' } };

export const AnimationPulse: Story = {
  args: { animation: 'pulse', height: 120, variant: 'rectangular', width: 120 },
};
export const AnimationFalse: Story = {
  args: { ...AnimationPulse.args, animation: false },
};

export const Size: Story = {
  args: { height: 320, variant: 'rounded', width: 320 },
};
