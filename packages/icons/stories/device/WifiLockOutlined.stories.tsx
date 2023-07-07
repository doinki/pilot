import type { Meta, StoryObj } from '@storybook/react';

import WifiLockOutlined from '../../lib/device/WifiLockOutlined';

const meta: Meta<typeof WifiLockOutlined> = {
  component: WifiLockOutlined,
  tags: ['autodocs'],
  title: 'device/WifiLockOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
