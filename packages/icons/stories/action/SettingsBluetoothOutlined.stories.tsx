import type { Meta, StoryObj } from '@storybook/react';

import SettingsBluetoothOutlined from '../../lib/action/SettingsBluetoothOutlined';

const meta: Meta<typeof SettingsBluetoothOutlined> = {
  component: SettingsBluetoothOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsBluetoothOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsBluetoothOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
