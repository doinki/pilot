import type { Meta, StoryObj } from '@storybook/react';

import BookmarkRemoveOutlined from '../../lib/action/BookmarkRemoveOutlined';

const meta: Meta<typeof BookmarkRemoveOutlined> = {
  component: BookmarkRemoveOutlined,
  tags: ['autodocs'],
  title: 'action/BookmarkRemoveOutlined',
};

export default meta;
type Story = StoryObj<typeof BookmarkRemoveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
