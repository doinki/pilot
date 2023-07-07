import type { Meta, StoryObj } from '@storybook/react';

import NetworkWifiOutlined from '../../lib/device/NetworkWifiOutlined';

const meta: Meta<typeof NetworkWifiOutlined> = {
  component: NetworkWifiOutlined,
  tags: ['autodocs'],
  title: 'device/NetworkWifiOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkWifiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
