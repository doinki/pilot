import type { Meta, StoryObj } from '@storybook/react';

import Replay30Outlined from '../../lib/av/Replay30Outlined';

const meta: Meta<typeof Replay30Outlined> = {
  component: Replay30Outlined,
  tags: ['autodocs'],
  title: 'av/Replay30Outlined',
};

export default meta;
type Story = StoryObj<typeof Replay30Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
