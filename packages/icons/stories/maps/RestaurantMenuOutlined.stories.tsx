import type { Meta, StoryObj } from '@storybook/react';

import RestaurantMenuOutlined from '../../lib/maps/RestaurantMenuOutlined';

const meta: Meta<typeof RestaurantMenuOutlined> = {
  component: RestaurantMenuOutlined,
  tags: ['autodocs'],
  title: 'maps/RestaurantMenuOutlined',
};

export default meta;
type Story = StoryObj<typeof RestaurantMenuOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
