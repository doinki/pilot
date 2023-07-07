import type { Meta, StoryObj } from '@storybook/react';

import SportsBasketballOutlined from '../../lib/social/SportsBasketballOutlined';

const meta: Meta<typeof SportsBasketballOutlined> = {
  component: SportsBasketballOutlined,
  tags: ['autodocs'],
  title: 'social/SportsBasketballOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsBasketballOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
