import type { Meta, StoryObj } from '@storybook/react';

import BluetoothSearchingOutlined from '../../lib/device/BluetoothSearchingOutlined';

const meta: Meta<typeof BluetoothSearchingOutlined> = {
  component: BluetoothSearchingOutlined,
  tags: ['autodocs'],
  title: 'device/BluetoothSearchingOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothSearchingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
