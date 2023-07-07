import type { Meta, StoryObj } from '@storybook/react';

import BroadcastOnPersonalOutlined from '../../lib/home/BroadcastOnPersonalOutlined';

const meta: Meta<typeof BroadcastOnPersonalOutlined> = {
  component: BroadcastOnPersonalOutlined,
  tags: ['autodocs'],
  title: 'home/BroadcastOnPersonalOutlined',
};

export default meta;
type Story = StoryObj<typeof BroadcastOnPersonalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
