import type { Meta, StoryObj } from '@storybook/react';

import FoodBankOutlined from '../../lib/places/FoodBankOutlined';

const meta: Meta<typeof FoodBankOutlined> = {
  component: FoodBankOutlined,
  tags: ['autodocs'],
  title: 'places/FoodBankOutlined',
};

export default meta;
type Story = StoryObj<typeof FoodBankOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
