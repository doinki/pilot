import type { Meta, StoryObj } from '@storybook/react';

import ScoreOutlined from '../../lib/editor/ScoreOutlined';

const meta: Meta<typeof ScoreOutlined> = {
  component: ScoreOutlined,
  tags: ['autodocs'],
  title: 'editor/ScoreOutlined',
};

export default meta;
type Story = StoryObj<typeof ScoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
