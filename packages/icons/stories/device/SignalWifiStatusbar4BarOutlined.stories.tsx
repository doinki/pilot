import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiStatusbar4BarOutlined from '../../lib/device/SignalWifiStatusbar4BarOutlined';

const meta: Meta<typeof SignalWifiStatusbar4BarOutlined> = {
  component: SignalWifiStatusbar4BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiStatusbar4BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiStatusbar4BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
