import type { Meta, StoryObj } from '@storybook/react';

import Forward5Outlined from '../../lib/av/Forward5Outlined';

const meta: Meta<typeof Forward5Outlined> = {
  component: Forward5Outlined,
  tags: ['autodocs'],
  title: 'av/Forward5Outlined',
};

export default meta;
type Story = StoryObj<typeof Forward5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
