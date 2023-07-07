import type { Meta, StoryObj } from '@storybook/react';

import EmojiEmotionsOutlined from '../../lib/social/EmojiEmotionsOutlined';

const meta: Meta<typeof EmojiEmotionsOutlined> = {
  component: EmojiEmotionsOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiEmotionsOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiEmotionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
