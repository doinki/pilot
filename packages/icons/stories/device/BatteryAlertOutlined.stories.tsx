import type { Meta, StoryObj } from '@storybook/react';

import BatteryAlertOutlined from '../../lib/device/BatteryAlertOutlined';

const meta: Meta<typeof BatteryAlertOutlined> = {
  component: BatteryAlertOutlined,
  tags: ['autodocs'],
  title: 'device/BatteryAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof BatteryAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
