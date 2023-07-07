import type { Meta, StoryObj } from '@storybook/react';

import SignalWifi4BarOutlined from '../../lib/device/SignalWifi4BarOutlined';

const meta: Meta<typeof SignalWifi4BarOutlined> = {
  component: SignalWifi4BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifi4BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifi4BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
