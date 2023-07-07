import type { Meta, StoryObj } from '@storybook/react';

import BookmarkAddedOutlined from '../../lib/action/BookmarkAddedOutlined';

const meta: Meta<typeof BookmarkAddedOutlined> = {
  component: BookmarkAddedOutlined,
  tags: ['autodocs'],
  title: 'action/BookmarkAddedOutlined',
};

export default meta;
type Story = StoryObj<typeof BookmarkAddedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
