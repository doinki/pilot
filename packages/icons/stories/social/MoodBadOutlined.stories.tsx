import type { Meta, StoryObj } from '@storybook/react';

import MoodBadOutlined from '../../lib/social/MoodBadOutlined';

const meta: Meta<typeof MoodBadOutlined> = {
  component: MoodBadOutlined,
  tags: ['autodocs'],
  title: 'social/MoodBadOutlined',
};

export default meta;
type Story = StoryObj<typeof MoodBadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
