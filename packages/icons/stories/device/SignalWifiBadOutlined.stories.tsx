import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiBadOutlined from '../../lib/device/SignalWifiBadOutlined';

const meta: Meta<typeof SignalWifiBadOutlined> = {
  component: SignalWifiBadOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiBadOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiBadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
