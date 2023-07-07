import type { Meta, StoryObj } from '@storybook/react';

import MediaBluetoothOffOutlined from '../../lib/device/MediaBluetoothOffOutlined';

const meta: Meta<typeof MediaBluetoothOffOutlined> = {
  component: MediaBluetoothOffOutlined,
  tags: ['autodocs'],
  title: 'device/MediaBluetoothOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MediaBluetoothOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
