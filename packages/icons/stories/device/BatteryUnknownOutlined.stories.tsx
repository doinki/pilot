import type { Meta, StoryObj } from '@storybook/react';

import BatteryUnknownOutlined from '../../lib/device/BatteryUnknownOutlined';

const meta: Meta<typeof BatteryUnknownOutlined> = {
  component: BatteryUnknownOutlined,
  tags: ['autodocs'],
  title: 'device/BatteryUnknownOutlined',
};

export default meta;
type Story = StoryObj<typeof BatteryUnknownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
