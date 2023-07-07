import type { Meta, StoryObj } from '@storybook/react';

import ShoppingBasketOutlined from '../../lib/action/ShoppingBasketOutlined';

const meta: Meta<typeof ShoppingBasketOutlined> = {
  component: ShoppingBasketOutlined,
  tags: ['autodocs'],
  title: 'action/ShoppingBasketOutlined',
};

export default meta;
type Story = StoryObj<typeof ShoppingBasketOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
