import type { Meta, StoryObj } from '@storybook/react';

import ShoppingCartOutlined from '../../lib/action/ShoppingCartOutlined';

const meta: Meta<typeof ShoppingCartOutlined> = {
  component: ShoppingCartOutlined,
  tags: ['autodocs'],
  title: 'action/ShoppingCartOutlined',
};

export default meta;
type Story = StoryObj<typeof ShoppingCartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
