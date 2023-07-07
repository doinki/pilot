import type { Meta, StoryObj } from '@storybook/react';

import MoodOutlined from '../../lib/social/MoodOutlined';

const meta: Meta<typeof MoodOutlined> = {
  component: MoodOutlined,
  tags: ['autodocs'],
  title: 'social/MoodOutlined',
};

export default meta;
type Story = StoryObj<typeof MoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
