import type { Meta, StoryObj } from '@storybook/react';

import LocalDrinkOutlined from '../../lib/maps/LocalDrinkOutlined';

const meta: Meta<typeof LocalDrinkOutlined> = {
  component: LocalDrinkOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalDrinkOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalDrinkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
