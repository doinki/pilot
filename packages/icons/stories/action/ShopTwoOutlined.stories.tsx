import type { Meta, StoryObj } from '@storybook/react';

import ShopTwoOutlined from '../../lib/action/ShopTwoOutlined';

const meta: Meta<typeof ShopTwoOutlined> = {
  component: ShopTwoOutlined,
  tags: ['autodocs'],
  title: 'action/ShopTwoOutlined',
};

export default meta;
type Story = StoryObj<typeof ShopTwoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
