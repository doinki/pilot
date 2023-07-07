import type { Meta, StoryObj } from '@storybook/react';

import BluetoothDriveOutlined from '../../lib/device/BluetoothDriveOutlined';

const meta: Meta<typeof BluetoothDriveOutlined> = {
  component: BluetoothDriveOutlined,
  tags: ['autodocs'],
  title: 'device/BluetoothDriveOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothDriveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
