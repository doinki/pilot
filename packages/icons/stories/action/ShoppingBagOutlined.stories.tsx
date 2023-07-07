import type { Meta, StoryObj } from '@storybook/react';

import ShoppingBagOutlined from '../../lib/action/ShoppingBagOutlined';

const meta: Meta<typeof ShoppingBagOutlined> = {
  component: ShoppingBagOutlined,
  tags: ['autodocs'],
  title: 'action/ShoppingBagOutlined',
};

export default meta;
type Story = StoryObj<typeof ShoppingBagOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
