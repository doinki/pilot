import type { Meta, StoryObj } from '@storybook/react';

import BluetoothConnectedOutlined from '../../lib/device/BluetoothConnectedOutlined';

const meta: Meta<typeof BluetoothConnectedOutlined> = {
  component: BluetoothConnectedOutlined,
  tags: ['autodocs'],
  title: 'device/BluetoothConnectedOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothConnectedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
