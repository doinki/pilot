import type { Meta, StoryObj } from '@storybook/react';

import ShoppingCartCheckoutOutlined from '../../lib/action/ShoppingCartCheckoutOutlined';

const meta: Meta<typeof ShoppingCartCheckoutOutlined> = {
  component: ShoppingCartCheckoutOutlined,
  tags: ['autodocs'],
  title: 'action/ShoppingCartCheckoutOutlined',
};

export default meta;
type Story = StoryObj<typeof ShoppingCartCheckoutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
