import type { Meta, StoryObj } from '@storybook/react';

import WalletOutlined from '../../lib/social/WalletOutlined';

const meta: Meta<typeof WalletOutlined> = {
  component: WalletOutlined,
  tags: ['autodocs'],
  title: 'social/WalletOutlined',
};

export default meta;
type Story = StoryObj<typeof WalletOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
