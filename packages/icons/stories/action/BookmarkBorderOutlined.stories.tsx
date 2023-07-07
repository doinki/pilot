import type { Meta, StoryObj } from '@storybook/react';

import BookmarkBorderOutlined from '../../lib/action/BookmarkBorderOutlined';

const meta: Meta<typeof BookmarkBorderOutlined> = {
  component: BookmarkBorderOutlined,
  tags: ['autodocs'],
  title: 'action/BookmarkBorderOutlined',
};

export default meta;
type Story = StoryObj<typeof BookmarkBorderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
