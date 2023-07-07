import type { Meta, StoryObj } from '@storybook/react';

import Replay5Outlined from '../../lib/av/Replay5Outlined';

const meta: Meta<typeof Replay5Outlined> = {
  component: Replay5Outlined,
  tags: ['autodocs'],
  title: 'av/Replay5Outlined',
};

export default meta;
type Story = StoryObj<typeof Replay5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
