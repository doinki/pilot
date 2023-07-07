import type { Meta, StoryObj } from '@storybook/react';

import Forward10Outlined from '../../lib/av/Forward10Outlined';

const meta: Meta<typeof Forward10Outlined> = {
  component: Forward10Outlined,
  tags: ['autodocs'],
  title: 'av/Forward10Outlined',
};

export default meta;
type Story = StoryObj<typeof Forward10Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
