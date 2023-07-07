import type { Meta, StoryObj } from '@storybook/react';

import VpnLockOutlined from '../../lib/notification/VpnLockOutlined';

const meta: Meta<typeof VpnLockOutlined> = {
  component: VpnLockOutlined,
  tags: ['autodocs'],
  title: 'notification/VpnLockOutlined',
};

export default meta;
type Story = StoryObj<typeof VpnLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
