import type { Meta, StoryObj } from '@storybook/react';

import AccountBalanceOutlined from '../../lib/action/AccountBalanceOutlined';

const meta: Meta<typeof AccountBalanceOutlined> = {
  component: AccountBalanceOutlined,
  tags: ['autodocs'],
  title: 'action/AccountBalanceOutlined',
};

export default meta;
type Story = StoryObj<typeof AccountBalanceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
