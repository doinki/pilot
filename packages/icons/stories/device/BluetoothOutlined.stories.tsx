import type { Meta, StoryObj } from '@storybook/react';

import BluetoothOutlined from '../../lib/device/BluetoothOutlined';

const meta: Meta<typeof BluetoothOutlined> = {
  component: BluetoothOutlined,
  tags: ['autodocs'],
  title: 'device/BluetoothOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
