import type { Meta, StoryObj } from '@storybook/react';

import BatteryStdOutlined from '../../lib/device/BatteryStdOutlined';

const meta: Meta<typeof BatteryStdOutlined> = {
  component: BatteryStdOutlined,
  tags: ['autodocs'],
  title: 'device/BatteryStdOutlined',
};

export default meta;
type Story = StoryObj<typeof BatteryStdOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
