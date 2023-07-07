import type { Meta, StoryObj } from '@storybook/react';

import BroadcastOnHomeOutlined from '../../lib/home/BroadcastOnHomeOutlined';

const meta: Meta<typeof BroadcastOnHomeOutlined> = {
  component: BroadcastOnHomeOutlined,
  tags: ['autodocs'],
  title: 'home/BroadcastOnHomeOutlined',
};

export default meta;
type Story = StoryObj<typeof BroadcastOnHomeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
