import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiStatusbarNullOutlined from '../../lib/device/SignalWifiStatusbarNullOutlined';

const meta: Meta<typeof SignalWifiStatusbarNullOutlined> = {
  component: SignalWifiStatusbarNullOutlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiStatusbarNullOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiStatusbarNullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
