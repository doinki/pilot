import type { Meta, StoryObj } from '@storybook/react';

import EmojiNatureOutlined from '../../lib/social/EmojiNatureOutlined';

const meta: Meta<typeof EmojiNatureOutlined> = {
  component: EmojiNatureOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiNatureOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiNatureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
