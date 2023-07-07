import type { Meta, StoryObj } from '@storybook/react';

import AccountBalanceWalletOutlined from '../../lib/action/AccountBalanceWalletOutlined';

const meta: Meta<typeof AccountBalanceWalletOutlined> = {
  component: AccountBalanceWalletOutlined,
  tags: ['autodocs'],
  title: 'action/AccountBalanceWalletOutlined',
};

export default meta;
type Story = StoryObj<typeof AccountBalanceWalletOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
