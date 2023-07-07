import type { Meta, StoryObj } from '@storybook/react';

import SportsVolleyballOutlined from '../../lib/social/SportsVolleyballOutlined';

const meta: Meta<typeof SportsVolleyballOutlined> = {
  component: SportsVolleyballOutlined,
  tags: ['autodocs'],
  title: 'social/SportsVolleyballOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsVolleyballOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
