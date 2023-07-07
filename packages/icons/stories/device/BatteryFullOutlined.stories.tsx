import type { Meta, StoryObj } from '@storybook/react';

import BatteryFullOutlined from '../../lib/device/BatteryFullOutlined';

const meta: Meta<typeof BatteryFullOutlined> = {
  component: BatteryFullOutlined,
  tags: ['autodocs'],
  title: 'device/BatteryFullOutlined',
};

export default meta;
type Story = StoryObj<typeof BatteryFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
