import type { Meta, StoryObj } from '@storybook/react';

import AddCommentOutlined from '../../lib/editor/AddCommentOutlined';

const meta: Meta<typeof AddCommentOutlined> = {
  component: AddCommentOutlined,
  tags: ['autodocs'],
  title: 'editor/AddCommentOutlined',
};

export default meta;
type Story = StoryObj<typeof AddCommentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
