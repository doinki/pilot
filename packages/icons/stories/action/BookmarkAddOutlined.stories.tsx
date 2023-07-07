import type { Meta, StoryObj } from '@storybook/react';

import BookmarkAddOutlined from '../../lib/action/BookmarkAddOutlined';

const meta: Meta<typeof BookmarkAddOutlined> = {
  component: BookmarkAddOutlined,
  tags: ['autodocs'],
  title: 'action/BookmarkAddOutlined',
};

export default meta;
type Story = StoryObj<typeof BookmarkAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
