import type { Meta, StoryObj } from '@storybook/react';

import Timer3Outlined from '../../lib/image/Timer3Outlined';

const meta: Meta<typeof Timer3Outlined> = {
  component: Timer3Outlined,
  tags: ['autodocs'],
  title: 'image/Timer3Outlined',
};

export default meta;
type Story = StoryObj<typeof Timer3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
