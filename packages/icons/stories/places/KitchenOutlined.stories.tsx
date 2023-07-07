import type { Meta, StoryObj } from '@storybook/react';

import KitchenOutlined from '../../lib/places/KitchenOutlined';

const meta: Meta<typeof KitchenOutlined> = {
  component: KitchenOutlined,
  tags: ['autodocs'],
  title: 'places/KitchenOutlined',
};

export default meta;
type Story = StoryObj<typeof KitchenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
