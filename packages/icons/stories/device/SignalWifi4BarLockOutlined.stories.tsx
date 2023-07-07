import type { Meta, StoryObj } from '@storybook/react';

import SignalWifi4BarLockOutlined from '../../lib/device/SignalWifi4BarLockOutlined';

const meta: Meta<typeof SignalWifi4BarLockOutlined> = {
  component: SignalWifi4BarLockOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifi4BarLockOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifi4BarLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
