import type { Meta, StoryObj } from '@storybook/react';

import EmojiPeopleOutlined from '../../lib/social/EmojiPeopleOutlined';

const meta: Meta<typeof EmojiPeopleOutlined> = {
  component: EmojiPeopleOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiPeopleOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiPeopleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
