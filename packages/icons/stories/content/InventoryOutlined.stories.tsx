import type { Meta, StoryObj } from '@storybook/react';

import InventoryOutlined from '../../lib/content/InventoryOutlined';

const meta: Meta<typeof InventoryOutlined> = {
  component: InventoryOutlined,
  tags: ['autodocs'],
  title: 'content/InventoryOutlined',
};

export default meta;
type Story = StoryObj<typeof InventoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
