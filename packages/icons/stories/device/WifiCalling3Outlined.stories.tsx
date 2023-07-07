import type { Meta, StoryObj } from '@storybook/react';

import WifiCalling3Outlined from '../../lib/device/WifiCalling3Outlined';

const meta: Meta<typeof WifiCalling3Outlined> = {
  component: WifiCalling3Outlined,
  tags: ['autodocs'],
  title: 'device/WifiCalling3Outlined',
};

export default meta;
type Story = StoryObj<typeof WifiCalling3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
