import type { Meta, StoryObj } from '@storybook/react';

import Forward30Outlined from '../../lib/av/Forward30Outlined';

const meta: Meta<typeof Forward30Outlined> = {
  component: Forward30Outlined,
  tags: ['autodocs'],
  title: 'av/Forward30Outlined',
};

export default meta;
type Story = StoryObj<typeof Forward30Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
