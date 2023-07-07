import type { Meta, StoryObj } from '@storybook/react';

import SportsHockeyOutlined from '../../lib/social/SportsHockeyOutlined';

const meta: Meta<typeof SportsHockeyOutlined> = {
  component: SportsHockeyOutlined,
  tags: ['autodocs'],
  title: 'social/SportsHockeyOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsHockeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
