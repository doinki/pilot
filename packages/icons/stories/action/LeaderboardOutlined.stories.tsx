import type { Meta, StoryObj } from '@storybook/react';

import LeaderboardOutlined from '../../lib/action/LeaderboardOutlined';

const meta: Meta<typeof LeaderboardOutlined> = {
  component: LeaderboardOutlined,
  tags: ['autodocs'],
  title: 'action/LeaderboardOutlined',
};

export default meta;
type Story = StoryObj<typeof LeaderboardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
