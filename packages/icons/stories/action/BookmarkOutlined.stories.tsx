import type { Meta, StoryObj } from '@storybook/react';

import BookmarkOutlined from '../../lib/action/BookmarkOutlined';

const meta: Meta<typeof BookmarkOutlined> = {
  component: BookmarkOutlined,
  tags: ['autodocs'],
  title: 'action/BookmarkOutlined',
};

export default meta;
type Story = StoryObj<typeof BookmarkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
