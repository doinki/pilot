import type { Meta, StoryObj } from '@storybook/react';

import MediaBluetoothOnOutlined from '../../lib/device/MediaBluetoothOnOutlined';

const meta: Meta<typeof MediaBluetoothOnOutlined> = {
  component: MediaBluetoothOnOutlined,
  tags: ['autodocs'],
  title: 'device/MediaBluetoothOnOutlined',
};

export default meta;
type Story = StoryObj<typeof MediaBluetoothOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
