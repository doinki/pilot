import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiStatusbarConnectedNoInternet4Outlined from '../../lib/device/SignalWifiStatusbarConnectedNoInternet4Outlined';

const meta: Meta<typeof SignalWifiStatusbarConnectedNoInternet4Outlined> = {
  component: SignalWifiStatusbarConnectedNoInternet4Outlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiStatusbarConnectedNoInternet4Outlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiStatusbarConnectedNoInternet4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
