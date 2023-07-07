import type { Meta, StoryObj } from '@storybook/react';

import NetworkWifi2BarOutlined from '../../lib/device/NetworkWifi2BarOutlined';

const meta: Meta<typeof NetworkWifi2BarOutlined> = {
  component: NetworkWifi2BarOutlined,
  tags: ['autodocs'],
  title: 'device/NetworkWifi2BarOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkWifi2BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
