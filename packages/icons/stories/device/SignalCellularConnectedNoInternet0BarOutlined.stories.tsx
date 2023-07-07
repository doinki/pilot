import type { Meta, StoryObj } from '@storybook/react';

import SignalCellularConnectedNoInternet0BarOutlined from '../../lib/device/SignalCellularConnectedNoInternet0BarOutlined';

const meta: Meta<typeof SignalCellularConnectedNoInternet0BarOutlined> = {
  component: SignalCellularConnectedNoInternet0BarOutlined,
  tags: ['autodocs'],
  title: 'device/SignalCellularConnectedNoInternet0BarOutlined',
};

export default meta;
type Story = StoryObj<typeof SignalCellularConnectedNoInternet0BarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
