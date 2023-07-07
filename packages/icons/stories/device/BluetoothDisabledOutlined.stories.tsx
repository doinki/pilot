import type { Meta, StoryObj } from '@storybook/react';

import BluetoothDisabledOutlined from '../../lib/device/BluetoothDisabledOutlined';

const meta: Meta<typeof BluetoothDisabledOutlined> = {
  component: BluetoothDisabledOutlined,
  tags: ['autodocs'],
  title: 'device/BluetoothDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
