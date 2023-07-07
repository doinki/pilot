import type { Meta, StoryObj } from '@storybook/react';

import Wifi1BarOutlined from '../../lib/device/Wifi1BarOutlined';

const meta: Meta<typeof Wifi1BarOutlined> = {
  component: Wifi1BarOutlined,
  tags: ['autodocs'],
  title: 'device/Wifi1BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Wifi1BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
