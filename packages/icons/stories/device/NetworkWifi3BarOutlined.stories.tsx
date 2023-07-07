import type { Meta, StoryObj } from '@storybook/react';

import NetworkWifi3BarOutlined from '../../lib/device/NetworkWifi3BarOutlined';

const meta: Meta<typeof NetworkWifi3BarOutlined> = {
  component: NetworkWifi3BarOutlined,
  tags: ['autodocs'],
  title: 'device/NetworkWifi3BarOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkWifi3BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
