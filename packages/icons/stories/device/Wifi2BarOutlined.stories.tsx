import type { Meta, StoryObj } from '@storybook/react';

import Wifi2BarOutlined from '../../lib/device/Wifi2BarOutlined';

const meta: Meta<typeof Wifi2BarOutlined> = {
  component: Wifi2BarOutlined,
  tags: ['autodocs'],
  title: 'device/Wifi2BarOutlined',
};

export default meta;
type Story = StoryObj<typeof Wifi2BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
