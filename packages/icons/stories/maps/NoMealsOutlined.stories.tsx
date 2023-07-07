import type { Meta, StoryObj } from '@storybook/react';

import NoMealsOutlined from '../../lib/maps/NoMealsOutlined';

const meta: Meta<typeof NoMealsOutlined> = {
  component: NoMealsOutlined,
  tags: ['autodocs'],
  title: 'maps/NoMealsOutlined',
};

export default meta;
type Story = StoryObj<typeof NoMealsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
