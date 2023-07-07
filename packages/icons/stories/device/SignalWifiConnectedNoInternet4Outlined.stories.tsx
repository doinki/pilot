import type { Meta, StoryObj } from '@storybook/react';

import SignalWifiConnectedNoInternet4Outlined from '../../lib/device/SignalWifiConnectedNoInternet4Outlined';

const meta: Meta<typeof SignalWifiConnectedNoInternet4Outlined> = {
  component: SignalWifiConnectedNoInternet4Outlined,
  tags: ['autodocs'],
  title: 'device/SignalWifiConnectedNoInternet4Outlined',
};

export default meta;
type Story = StoryObj<typeof SignalWifiConnectedNoInternet4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
