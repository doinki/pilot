import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularOffOutlined from '../../lib/device/SignalCellularOffOutlined';

const meta: Meta<typeof SignalCellularOffOutlined> = {
  component: SignalCellularOffOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
