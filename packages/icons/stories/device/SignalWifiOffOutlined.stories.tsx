import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiOffOutlined from '../../lib/device/SignalWifiOffOutlined';

const meta: Meta<typeof SignalWifiOffOutlined> = {
  component: SignalWifiOffOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
