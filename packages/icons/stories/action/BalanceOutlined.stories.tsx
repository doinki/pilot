import type { Meta, StoryObj } from '@storybook/react';

import BalanceOutlined from '../../lib/action/BalanceOutlined';

const meta: Meta<typeof BalanceOutlined> = {
  component: BalanceOutlined,
  tags: ['autodocs'],
  title: 'action/BalanceOutlined',
};

export default meta;
type Story = StoryObj<typeof BalanceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
