import type { Meta, StoryObj } from '@storybook/react';

import ReplyAllOutlined from '../../lib/content/ReplyAllOutlined';

const meta: Meta<typeof ReplyAllOutlined> = {
  component: ReplyAllOutlined,
  tags: ['autodocs'],
  title: 'content/ReplyAllOutlined',
};

export default meta;
type Story = StoryObj<typeof ReplyAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
