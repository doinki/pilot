import type { Meta, StoryObj } from '@storybook/react';

import ScoreboardOutlined from '../../lib/social/ScoreboardOutlined';

const meta: Meta<typeof ScoreboardOutlined> = {
  component: ScoreboardOutlined,
  tags: ['autodocs'],
  title: 'social/ScoreboardOutlined',
};

export default meta;
type Story = StoryObj<typeof ScoreboardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
