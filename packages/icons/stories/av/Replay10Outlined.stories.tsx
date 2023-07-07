import type { Meta, StoryObj } from '@storybook/react';

import Replay10Outlined from '../../lib/av/Replay10Outlined';

const meta: Meta<typeof Replay10Outlined> = {
  component: Replay10Outlined,
  tags: ['autodocs'],
  title: 'av/Replay10Outlined',
};

export default meta;
type Story = StoryObj<typeof Replay10Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
