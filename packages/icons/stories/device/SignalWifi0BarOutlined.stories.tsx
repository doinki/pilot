import type { Meta, StoryObj } from '@storybook/react';

import SignalWifi0BarOutlined from '../../lib/device/SignalWifi0BarOutlined';

const meta: Meta<typeof SignalWifi0BarOutlined> = {
  component: SignalWifi0BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifi0BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifi0BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
