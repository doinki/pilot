import type { Meta, StoryObj } from '@storybook/react';

import RemoveShoppingCartOutlined from '../../lib/action/RemoveShoppingCartOutlined';

const meta: Meta<typeof RemoveShoppingCartOutlined> = {
  component: RemoveShoppingCartOutlined,
  tags: ['autodocs'],
  title: 'action/RemoveShoppingCartOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveShoppingCartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
