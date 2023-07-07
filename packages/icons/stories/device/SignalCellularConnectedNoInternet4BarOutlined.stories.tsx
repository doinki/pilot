import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularConnectedNoInternet4BarOutlined from '../../lib/device/SignalCellularConnectedNoInternet4BarOutlined';

const meta: Meta<typeof SignalCellularConnectedNoInternet4BarOutlined> = {
  component: SignalCellularConnectedNoInternet4BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularConnectedNoInternet4BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularConnectedNoInternet4BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
