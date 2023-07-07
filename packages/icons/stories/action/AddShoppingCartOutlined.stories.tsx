import type { Meta, StoryObj } from '@storybook/react';

import AddShoppingCartOutlined from '../../lib/action/AddShoppingCartOutlined';

const meta: Meta<typeof AddShoppingCartOutlined> = {
  component: AddShoppingCartOutlined,
  tags: ['autodocs'],
  title: 'action/AddShoppingCartOutlined',
};

export default meta;
type Story = StoryObj<typeof AddShoppingCartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
