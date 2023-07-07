import type { Meta, StoryObj } from '@storybook/react';

import NoDrinksOutlined from '../../lib/places/NoDrinksOutlined';

const meta: Meta<typeof NoDrinksOutlined> = {
  component: NoDrinksOutlined,
  tags: ['autodocs'],
  title: 'places/NoDrinksOutlined',
};

export default meta;
type Story = StoryObj<typeof NoDrinksOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
