import type { Meta, StoryObj } from '@storybook/react';

import SportsFootballOutlined from '../../lib/social/SportsFootballOutlined';

const meta: Meta<typeof SportsFootballOutlined> = {
  component: SportsFootballOutlined,
  tags: ['autodocs'],
  title: 'social/SportsFootballOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsFootballOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
