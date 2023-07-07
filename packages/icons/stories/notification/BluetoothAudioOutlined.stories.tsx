import type { Meta, StoryObj } from '@storybook/react';

import BluetoothAudioOutlined from '../../lib/notification/BluetoothAudioOutlined';

const meta: Meta<typeof BluetoothAudioOutlined> = {
  component: BluetoothAudioOutlined,
  tags: ['autodocs'],
  title: 'notification/BluetoothAudioOutlined',
};

export default meta;
type Story = StoryObj<typeof BluetoothAudioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
