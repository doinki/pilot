import type { Meta, StoryObj } from '@storybook/react';

import MoneyOutlined from '../../lib/maps/MoneyOutlined';

const meta: Meta<typeof MoneyOutlined> = {
  component: MoneyOutlined,
  tags: ['autodocs'],
  title: 'maps/MoneyOutlined',
};

export default meta;
type Story = StoryObj<typeof MoneyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
