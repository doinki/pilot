import type { Meta, StoryObj } from '@storybook/react';

import Timer10Outlined from '../../lib/image/Timer10Outlined';

const meta: Meta<typeof Timer10Outlined> = {
  component: Timer10Outlined,
  tags: ['autodocs'],
  title: 'image/Timer10Outlined',
};

export default meta;
type Story = StoryObj<typeof Timer10Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
