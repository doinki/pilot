import type { Meta, StoryObj } from '@storybook/react';

import EmojiObjectsOutlined from '../../lib/social/EmojiObjectsOutlined';

const meta: Meta<typeof EmojiObjectsOutlined> = {
  component: EmojiObjectsOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiObjectsOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiObjectsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
