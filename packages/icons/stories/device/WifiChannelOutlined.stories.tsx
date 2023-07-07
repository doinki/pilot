import type { Meta, StoryObj } from '@storybook/react';

import WifiChannelOutlined from '../../lib/device/WifiChannelOutlined';

const meta: Meta<typeof WifiChannelOutlined> = {
  component: WifiChannelOutlined,
  tags: ['autodocs'],
  title: 'device/WifiChannelOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiChannelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
