import type { Meta, StoryObj } from '@storybook/react';

import BatteryChargingFullOutlined from '../../lib/device/BatteryChargingFullOutlined';

const meta: Meta<typeof BatteryChargingFullOutlined> = {
  component: BatteryChargingFullOutlined,
  tags: ['autodocs'],
  title: 'device/BatteryChargingFullOutlined',
};

export default meta;
type Story = StoryObj<typeof BatteryChargingFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
