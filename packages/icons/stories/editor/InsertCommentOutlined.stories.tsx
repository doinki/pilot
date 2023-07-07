import type { Meta, StoryObj } from '@storybook/react';

import InsertCommentOutlined from '../../lib/editor/InsertCommentOutlined';

const meta: Meta<typeof InsertCommentOutlined> = {
  component: InsertCommentOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertCommentOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertCommentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
