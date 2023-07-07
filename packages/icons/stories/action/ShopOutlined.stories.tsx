import type { Meta, StoryObj } from '@storybook/react';

import ShopOutlined from '../../lib/action/ShopOutlined';

const meta: Meta<typeof ShopOutlined> = {
  component: ShopOutlined,
  tags: ['autodocs'],
  title: 'action/ShopOutlined',
};

export default meta;
type Story = StoryObj<typeof ShopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
