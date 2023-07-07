import type { Meta, StoryObj } from '@storybook/react';

import LocalGroceryStoreOutlined from '../../lib/maps/LocalGroceryStoreOutlined';

const meta: Meta<typeof LocalGroceryStoreOutlined> = {
  component: LocalGroceryStoreOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalGroceryStoreOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalGroceryStoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
