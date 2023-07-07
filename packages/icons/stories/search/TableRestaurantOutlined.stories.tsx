import type { Meta, StoryObj } from '@storybook/react';

import TableRestaurantOutlined from '../../lib/search/TableRestaurantOutlined';

const meta: Meta<typeof TableRestaurantOutlined> = {
  component: TableRestaurantOutlined,
  tags: ['autodocs'],
  title: 'search/TableRestaurantOutlined',
};

export default meta;
type Story = StoryObj<typeof TableRestaurantOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
