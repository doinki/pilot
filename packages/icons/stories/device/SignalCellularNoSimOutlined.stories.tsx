import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularNoSimOutlined from '../../lib/device/SignalCellularNoSimOutlined';

const meta: Meta<typeof SignalCellularNoSimOutlined> = {
  component: SignalCellularNoSimOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularNoSimOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularNoSimOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
