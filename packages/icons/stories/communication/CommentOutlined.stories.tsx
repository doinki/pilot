import type { Meta, StoryObj } from '@storybook/react';

import CommentOutlined from '../../lib/communication/CommentOutlined';

const meta: Meta<typeof CommentOutlined> = {
  component: CommentOutlined,
  tags: ['autodocs'],
  title: 'communication/CommentOutlined',
};

export default meta;
type Story = StoryObj<typeof CommentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
