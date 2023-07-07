import type { Meta, StoryObj } from '@storybook/react';

import RestaurantOutlined from '../../lib/maps/RestaurantOutlined';

const meta: Meta<typeof RestaurantOutlined> = {
  component: RestaurantOutlined,
  tags: ['autodocs'],
  title: 'maps/RestaurantOutlined',
};

export default meta;
type Story = StoryObj<typeof RestaurantOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
