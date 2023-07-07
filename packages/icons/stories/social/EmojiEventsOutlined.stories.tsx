import type { Meta, StoryObj } from '@storybook/react';

import EmojiEventsOutlined from '../../lib/social/EmojiEventsOutlined';

const meta: Meta<typeof EmojiEventsOutlined> = {
  component: EmojiEventsOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiEventsOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiEventsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
