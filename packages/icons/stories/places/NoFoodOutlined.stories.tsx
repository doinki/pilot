import type { Meta, StoryObj } from '@storybook/react';

import NoFoodOutlined from '../../lib/places/NoFoodOutlined';

const meta: Meta<typeof NoFoodOutlined> = {
  component: NoFoodOutlined,
  tags: ['autodocs'],
  title: 'places/NoFoodOutlined',
};

export default meta;
type Story = StoryObj<typeof NoFoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
