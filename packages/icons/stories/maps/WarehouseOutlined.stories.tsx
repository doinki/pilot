import type { Meta, StoryObj } from '@storybook/react';

import WarehouseOutlined from '../../lib/maps/WarehouseOutlined';

const meta: Meta<typeof WarehouseOutlined> = {
  component: WarehouseOutlined,
  tags: ['autodocs'],
  title: 'maps/WarehouseOutlined',
};

export default meta;
type Story = StoryObj<typeof WarehouseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
