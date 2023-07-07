import type { Meta, StoryObj } from '@storybook/react';

import ModeCommentOutlined from '../../lib/editor/ModeCommentOutlined';

const meta: Meta<typeof ModeCommentOutlined> = {
  component: ModeCommentOutlined,
  tags: ['autodocs'],
  title: 'editor/ModeCommentOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeCommentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
