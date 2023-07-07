import type { Meta, StoryObj } from '@storybook/react';

import NetworkWifi1BarOutlined from '../../lib/device/NetworkWifi1BarOutlined';

const meta: Meta<typeof NetworkWifi1BarOutlined> = {
  component: NetworkWifi1BarOutlined,
  tags: ['autodocs'],
  title: 'device/NetworkWifi1BarOutlined',
};

export default meta;
type Story = StoryObj<typeof NetworkWifi1BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
